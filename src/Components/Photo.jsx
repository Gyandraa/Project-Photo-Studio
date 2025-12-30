export default function Photo() {
  return (
    <div className="w-full h-48 overflow-hidden rounded-2xl">
      <img
        src="/assets/studio.png"
        alt="Sample Photo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
