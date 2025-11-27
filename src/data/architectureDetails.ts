import type { DetailItem } from '@site/src/types/common';

export const architectureDetailList: DetailItem[] = [
  {
    id: 'Architectural Advantages',
    title: 'Architectural Advantages',
    points: [
      'Memory-First Architecture: Uses memory as primary storage with SSD for capacity, optimized for direct access.',
      'Lock-Free Concurrency: Employs lock-free data structures and multiversioning for high-performance, conflict-free reads.',
      'Parallel Logging & Recovery: Implements parallel commit and recovery to minimize latency and accelerate restarts.',
    ],
    Svg: require('@site/static/img/SSD.svg').default,
  },
  {
    id: 'Hierarchical Storage Layer',
    title: 'Larger Than Memory Design:\nHierarchical Storage layer using Memory + Disk',
    description: 'How to Resolve Memory Capacity Challenges',
    points: [
      'Hot/Cold Data Tiering: Hot data resides in-memory (row-based), while cold data is persisted to disk in a columnar format.',
      'Dynamic Data Conversion: A GC unit converts unused hot data to cold data on disk. Updating cold data promotes it back to hot data in memory.',
      'Unified Page & Index Management: Data is managed in fixed-size pages, with a persistent B+Tree index enabling efficient access.',
    ],
    Svg: require('@site/static/img/SSD&Disk.svg').default,
  },
];
