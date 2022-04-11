export const loadPosts = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");
  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const [postJson, photosJson] = await Promise.all([
    posts.json(),
    photos.json(),
  ]);

  const postAndPhotos = postJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });

  return postAndPhotos;
};
