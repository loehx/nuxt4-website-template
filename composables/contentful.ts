interface Author {
    name: string;
}

interface Image {
    title: string;
    photo: Image;
    imageCaption: string;
    author: Author; 
};

export const getPostByAuthor = async (authorName: string): Promise<Image> => {
    const { data } = await useAsyncData('image', async (nuxtApp) => {
        const contentfulClient = useNuxtApp().$contentfulClient;
        console.log(contentfulClient);
        return contentfulClient.getEntries({ 'content_type': 'image' });
    })
    console.log(data.value);
    const { title, photo, imageCaption, author } = data.value.items[0].fields;

    return {
        title,
        photo,
        imageCaption,
        author
    }
}