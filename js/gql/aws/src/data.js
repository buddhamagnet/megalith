export const data = {
  ec2: {
    types: [
      {
        id: "1",
        type: "",
        instance: "F",
        name: "Field programmable gate array",
        useCase:
          "Genomics research, financial analytics, real-time video processing, big data.",
      },
      {
        id: "2",
        type: "storage",
        instance: "I",
        name: "High speed storage",
        useCase: "NoSQL databases, data warehousing.",
      },
      {
        id: "3",
        type: "graphics",
        instance: "G",
        name: "Graphics intensive",
        useCase: "Video encoding, 3d application streaming.",
      },
      {
        id: "4",
        type: "disk",
        instance: "H",
        name: "High disk throughput",
        useCase: "MapReduce workloads, distributed file systems (HDFS).",
      },
      {
        id: "5",
        type: "general",
        instance: "T",
        name: "Low cost, general purpose",
        useCase: "Web servers, small databases",
      },
      {
        id: "6",
        type: "storage",
        instance: "D",
        name: "Dense storage",
        useCase: "File servers, data warehousing, Hadoop",
      },
      {
        id: "7",
        type: "memory",
        instance: "R",
        name: "Memory optimised",
        useCase: "Memory intensive applications and databases",
      },
      {
        id: "8",
        type: "general",
        instance: "M",
        name: "General purpose",
        useCase: "Application servers",
      },
      {
        id: "9",
        type: "compute",
        instance: "C",
        name: "Compute optimised",
        useCase: "CPU intensive applications and databases",
      },
      {
        id: "10",
        type: "graphics",
        instance: "P",
        name: "Graphics, general purpose GPU",
        useCase: "Machine learning, bitcoin mining",
      },
      {
        id: "11",
        type: "memory",
        instance: "X",
        name: "Memory optimised",
        useCase: "SAP HANA, Apache Spark",
      },
    ],
    options: [
      {
        id: "1",
        option: "on demand",
        description:
          "Allows you to pay a fixed rate by the hour (or second) with no commitment.",
        useCase:
          "Low cost and flexibility with no up front commitment. Good for applications with short-term, spiky or unpredictable workloads that cannot be interrupted, or applications being developed for the first time",
      },
      {
        id: "2",
        option: "reserved",
        description:
          "Provides you with a capacity reservation, and offer a significant discount on the hourly charge. One or three year terms.",
        useCase:
          "Perfect for applications with steady state or predictable usage and up front payments can significantly reduce cost (up to 75%).",
      },
      {
        id: "3",
        option: "convertible reserved",
        description:
          "Provides you with a capacity reservation, and offer a significant discount on the hourly charge. One or three year terms.",
        useCase:
          "Perfect for applications with steady state or predictable usage and up front payments can significantly reduce cost (up to 54%).",
      },
      {
        id: "4",
        option: "scheduled reserved",
        description:
          "Provides you with a capacity reservation in a specific time window, and offer a significant discount on the hourly charge. One or three year terms.",
        useCase:
          "Perfect for applications with steady state or predictable usage.",
      },
      {
        id: "5",
        option: "spot",
        description:
          "Enables you to bid whatever price you want for instance capacity, providing for even greater savings if your applications have flexible start and end times",
        useCase:
          "Perfect for applications with flexible startnd end times and which are only feasible at low compute prices.",
      },
      {
        id: "6",
        option: "dedicated host",
        description:
          "Physical server for your dedicated use which can help reduce costs by allowing you to use your own server-bound software licences",
        useCase:
          "Useful for regulatory requirements or licencing that may not support multi-tenant virtualization.",
      },
    ],
  },
};
