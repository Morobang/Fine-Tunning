import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold mb-4">Welcome to Fine-Tunning</h1>
        <p className="mb-6">This is an AI-powered review app. You can submit reviews and get AI-assisted feedback, or fine-tune your own AI model.</p>
        <Link href="/review">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Go to Review Submission</button>
        </Link>
      </main>
    );
  }
  );
}
