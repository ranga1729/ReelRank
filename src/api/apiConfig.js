const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '863398b24abecfd3d16f885be72a7726',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;