export default function ProfileCard() {
  return (
    <div className="p-6 rounded-2xl glass w-72 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 p-1">
        <img src="https://i.pravatar.cc/150?img=68" alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-background" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold text-foreground">John Doe</h3>
        <p className="text-sm text-muted-foreground">Software Engineer</p>
      </div>
      <button className="w-full py-2 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
        Follow
      </button>
    </div>
  );
}
