export function chunkArray(arr, numBuckets) {
  const buckets = Array.from({ length: numBuckets }, () => []);

  // Distribute elements using round-robin
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = i % numBuckets;
    buckets[bucketIndex].push(arr[i]);
  }

  return buckets;
}
