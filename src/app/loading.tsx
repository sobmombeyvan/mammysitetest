export default function Loading() {
  return (
    <div className="min-h-[40vh] bg-cream-light py-12">
      <div className="section-container animate-pulse space-y-4">
        <div className="h-3 w-28 rounded bg-gray-200" />
        <div className="h-9 w-2/3 max-w-md rounded bg-gray-200" />
        <div className="h-3 w-full max-w-sm rounded bg-gray-100" />
      </div>
    </div>
  );
}
