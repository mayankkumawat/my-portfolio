import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Mayank Kumawat</title>
        <meta
          name="description"
          content="Welcome to my portfolio! With over 10 projects of experience in Web and Mobile Applications development, I specialize in all phases of the Software development cycle using React JS, React Native, JavaScript, HTML5, CSS3, and Bootstrap. 🌐💻 I bring working knowledge of bug tracking systems and source control (GIT), alongside strong problem-solving skills, teamwork, time management, and effective communication. 🧠✨ My competence lies in following production processes and technical specifications, ensuring quality and efficiency in every project. 📋⚙️ Explore my portfolio to see my work and expertise in action!"
        />
        <link rel="icon" href="/profile-pic.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
