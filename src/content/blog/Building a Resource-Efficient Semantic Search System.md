---
title: 'Building a Resource-Efficient Semantic Search System'
description: 'A comprehensive guide on implementing lightweight semantic search using Milvus Lite and GTE vector model, running on just 1GB RAM'
pubDate: 'Oct 20 2024'
heroImage: '/images/d8331d63d6fc4fd09ed27b0f283adc36.png'
category: 'ai-ml'
---

# Building a Resource-Efficient Semantic Search System with Milvus Lite and GTE

This article explores how to implement a lightweight semantic search solution using Milvus Lite, GTE, and Rerank tools through Docker deployment. The system can run on just 1GB of RAM - even on a Raspberry Pi - while supporting local data storage and migration. It's perfect for local knowledge bases or small-scale applications.

## Project Overview

GitHub Repository: https://github.com/BetaStreetOmnis/milvus_lite_server

## Key Components

### Vector Database
We use Milvus Lite, a lightweight version of Milvus, for efficient storage and retrieval of large-scale vector data in resource-constrained environments.

### Embedding Model
For text vectorization, we utilize the `nlp_gte_sentence-embedding_chinese-base` model, which outperforms both BGE and M3E in our testing.

### Rerank Model
To optimize query result precision and improve search relevance, we implement a reranking mechanism based on the `gte_passage-ranking_multilingual-base` model.

## Docker Deployment and Resource Optimization

### System Requirements
- Minimum: 1 CPU core, 1GB RAM
- CPU-only operation supported
- Local storage with data migration capabilities

### Docker Setup