export type Author = {
  avatarUrl: string;
  name: string;
  role: string;
}

export type Content = {
  type: 'paragraph' | 'link';
  content: string;
  url?: string;
}

export type Post = {
  id: string;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export const posts: Post[] = [
  {
    id: '1',
    author: {
      avatarUrl: 'https://github.com/igorSouzza.png',
      name: 'Igor Souza',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum 👋'  },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni autem consectetur reiciendis est asperiores at eaque culpa itaque. Voluptatum laborum sunt exercitationem aliquam similique illum ex fugit a iste.'  },
      { type: 'link', content: '👉 jane.design/doctorcare', url: 'https://jane.design/doctorcare'  },
    ],
    publishedAt: new Date('2023-01-04 09:00:00')
  },
  {
    id: '2',
    author: {
      avatarUrl: 'https://thispersondoesnotexist.com/image',
      name: 'John Doe',
      role: 'Designer'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum 👋'  },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni autem consectetur reiciendis est asperiores at eaque culpa itaque. Voluptatum laborum sunt exercitationem aliquam similique illum ex fugit a iste.'  },
      { type: 'link', content: '👉 jane.design/doctorcare', url: 'https://jane.design/doctorcare'  },
    ],
    publishedAt: new Date('2023-01-04 11:00:00')
  },
]
