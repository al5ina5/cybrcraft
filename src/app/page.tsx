import PlayerList from "@/components/players";

export default function Home() {
  return (
    <div className="min-h-screen p-6 w-full bg-center bg-cover flex flex-col gap-6 items-center justify-center" style={{ backgroundImage: 'url("/img/bg.jpg")' }}>

      <div className="absolute inset-0 bg-pink-500/20 backdrop-blur" />

      <div className="bg-gray-300 emboss p-1 relative z-20 max-w-md w-full">
        <div className="p-6 font-mono space-y-4  bg-white deboss">
          <div className="p-2">
            <p className="text-4xl font-extrabold">CYBRCRAFT</p>
            <p className="text-2xl">A developing Creative Minecraft community.</p>
          </div>
          <div className="text-2xl bg-black text-white text-center p-2">
            <p>IP: play.cybrcraft.xyz</p>
          </div>
          <div className="text-2xl flex flex-col">
            <a className="bllock underline hover:no-underline" href="https://map.cybrcraft.xyz/" target="_blank">{'>'} Open Map</a>
            <a className="underline hover:no-underline" href="/discord" target="_blank">{'>'} Join Discord</a>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 emboss p-1 relative z-20 max-w-md w-full">
        <div>
          <p>Online Players</p>
        </div>
        <div className="p-2 font-mono space-y-4  bg-white deboss">
          <PlayerList />
        </div>
      </div>
    </div >
  );
}
