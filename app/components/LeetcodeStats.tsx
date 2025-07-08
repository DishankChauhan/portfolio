import Image from 'next/image';

export default function LeetcodeStats() {
  return (
    <section className="mb-8">
      <div className="flex justify-center">
        <Image
          src="/Leetcode submission.png"
          alt="Leetcode Submissions"
          width={1000}
          height={500}
          className="rounded-lg shadow-lg w-full"
          priority
        />
      </div>
    </section>
  );
} 