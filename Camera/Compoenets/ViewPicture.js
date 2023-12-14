import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Dimensions, Button } from 'react-native';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import db from '../Firebaseconfig';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

function ViewPicture() {
    const [imageDataList, setImageDataList] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const imageCollection = collection(db, 'images');
                const snapshot = await getDocs(imageCollection);

                const imageList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setImageDataList(imageList);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };

        fetchImageData();
    }, []);

    const handleImageClick = (id) => {
        setSelectedImage(id);
    };

    const handleDeleteImage = async (id) => {
        try {
            // Delete the image from Firebase
            await deleteDoc(doc(db, 'images', id));

            // Remove the deleted image from state
            setImageDataList(prevImageDataList =>
                prevImageDataList.filter((item) => item.id !== id)
            );

            // Hide the full image and delete button
            setSelectedImage(null);
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const renderFullImage = () => {
        const selectedItem = imageDataList.find((item) => item.id === selectedImage);

        if (!selectedItem) return null;

        return (
            <View style={styles.fullImageContainer}>
                <Image source={{ uri: selectedItem.url }} style={styles.fullImage} />
                <View style={styles.imageInfo}>
                <Text style={styles.imageName}>{selectedItem.name}</Text>
                <TouchableOpacity onPress={() => handleDeleteImage(selectedItem.id)}>
                    <Icon name="trash-outline" size={30} color="white" />
                </TouchableOpacity>
            </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {imageDataList.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => handleImageClick(item.id)}>
                    <Image source={{ uri: item.url }} style={styles.thumbnail} />
                </TouchableOpacity>
            ))}
            {selectedImage && renderFullImage()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnail: {
        width: screenWidth / 4,
        height: screenWidth / 4,
        margin: 2,
    },
    fullImageContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        alignItems: 'center',
        padding: 10,
    },
    fullImage: {
        width: screenWidth,
        height: screenWidth,
    },
    imageName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    imageInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        gap: 200,
    },
});

export default ViewPicture;
