import type { DetailItem } from '@site/src/types/common';

export const agentDetailList: DetailItem[] = [
  {
    id: 'Short-Term Memory',
    title: 'Short-Term Memory',
    description:
      'Retains information relevant to the immediate session or a single task chain, such as the recent conversation history and the results of the last few actions.',
    solutions: ['Redis', 'OS memory'],
    Svg: require('@site/static/img/Agent Real-time Data Processing.svg').default,
  },
  {
    id: 'Long-Term Memory',
    title: 'Long-Term Memory',
    description:
      'Persists critical information across sessions, such as user preferences. learned procedures, and key outcomes from past interactions.',
    solutions: ['MySQL/PostgreSQL', 'Vector DB'],
    Svg: require('@site/static/img/OLTP & OLAP.svg').default,
  },
  {
    id: 'Instruction Context',
    title: 'Instruction Context',
    description:
      "Defines the Agent's role, rules, and goals. It includes the system prompt, few-shot examples, and constraints that shape its behavior.",
    solutions: ['Redis', 'OS memory'],
    Svg: require('@site/static/img/Agent Real-time Data Processing.svg').default,
  },
  {
    id: 'Knowledge Memory',
    title: 'Knowledge Memory',
    description:
      "Provides external, domain-specific knowledge the Agent wasn't trained on. It's often accessed via Retrieval-Augmented Generation RAG) from vector databases or knowledge graphs.",
    solutions: ['Graph DB', ' Vector DB', 'File storage'],
    Svg: require('@site/static/img/QPS.svg').default,
  },
  {
    id: 'Operational Context',
    title: 'Operational Context',
    description:
      "The Agent's interface with the external world. It includes the state of tool calls, API responses, code execution results, and environmental feedback.",
    solutions: ['Redis', 'OS memory'],
    Svg: require('@site/static/img/Agent Real-time Data Processing.svg').default,
  },
];
