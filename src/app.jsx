import Profile from "./Components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar= 'https://photos.app.goo.gl/A61otLMYdC4LXZHBA'
        name="Bruno Lula"
        bio="full stack development student"
        email="contato.brunolula@gmail.com"
        phone="+5511958825764"
        githubUrl="https://github.com/BrunoLula"
        linkedinUrl="https://www.linkedin.com/in/bruno-lula-003448240/"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}
