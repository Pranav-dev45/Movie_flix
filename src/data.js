export const movies = [
  {
    id: 1,
    category: 'now_playing',
    title: {
      English: 'Now Playing',
      Hindi: 'अभी चल रही फिल्में',
    },
    image:
      'https://imguscdn.gamespress.com/cdn/files/Square-Enix/2020/06/22225001-3ba63e3c-684b-4386-8d37-75c6a2d62450/MARVELS_AVENGERS_PR_Header_1024x576.jpg?w=600&mode=max&otf=y&quality=90&format=jpg&bgcolor=white&sky=46e29aae7bc7b0e02ff8e987cf8b64039c38742e03e41c4c8924d997a20392a0',
  },
  {
    id: 2,
    category: 'popular',
    title: {
      English: 'Popular',
      Hindi: 'लोकप्रिय',
    },
    image:
      'https://cdn.pixabay.com/photo/2024/06/22/16/55/ai-generated-8846672_1280.jpg',
  },
  {
    id: 3,
    category: 'top_rated',
    title: {
      English: 'Top Rated',
      Hindi: 'सबसे अधिक रेटेड',
    },
    image:
      'https://i.etsystatic.com/18284891/r/il/9d88d8/6946543661/il_794xN.6946543661_8sh5.jpg',
  },
  {
    id: 4,
    category: 'upcoming',
    title: {
      English: 'Upcoming',
      Hindi: 'आने वाली फिल्में',
    },
    image:
      'https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg',
  },
];

export const url = 'https://api.themoviedb.org/3/movie/';
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};
