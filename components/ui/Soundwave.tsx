export default function Soundwave() {
    return (
        <div className="flex items-center gap-1.5 h-32">
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="w-1.5 bg-accent rounded-full wave-bar"
                    style={{
                        height: `${Math.random() * 60 + 20}%`,
                        animationDelay: `${i * 0.1}s`,
                        boxShadow: '0 0 15px rgba(0, 245, 255, 0.4)'
                    }}
                />
            ))}
        </div>
    );
}
