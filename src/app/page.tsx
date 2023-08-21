import NavbarHome from "@/components/NavbarHome";


export default function Home() {
  return (
    <div className="bg-nature min-h-screen flex flex-col items-center justify-center">
      {/* Conteúdo da página */}
      <h1 className="text-white text-4xl font-bold">Bem-vindo!</h1>
      <p className="text-white mt-4">Esta é a sua página inicial.</p>
      <NavbarHome />
    </div>
  )
}
