# Social Media Performance Analysis using Langflow and DataStax Astra DB

## 🚀 The Tech Stack in Use
- **Langflow**: To create workflows and interface with GPT for insights-integration.
- **DataStax Astra DB**: Scalable cloud database used for storage and querying of engagement data.
- **Python**: For scripting and performing database operations.
- **Findcoder.io**: Hosting and showcase platform for the project.
---
## ⭐ Features
1. **Simulated Engagement Data**:
   - A mock dataset that holds many different metrics of likes, shares, comments, and post types.
   - Data is stored in **DataStax Astra DB** so we can query and pull it easily.

2. **Post Performance Analysis**:
   - **Langflow workflow** where we can submit a post-related query.
   - Query data against the Astra DB to get engagement averages by post type.

3. **Generate Insights**:
   - Integrating **Azure OpenAI GPT-4o** to produce meaningful insights from analyzed data.
   - Inference such as:
     - "Carousel posts are 20% more engaging than static posts."
     - "The Reels get two times higher vocals compared to other formats."

4. **Embedding Model for Query Optimization**:
   - Advanced query processing and a higher degree of context comprehension using the **Azure OpenAI text-embedding-ada-002 Model**.

5. **Interactive Frontend and Scalable Backend**:
   - **React** was used to develop an interactive user interface to input and display insights.
   - The backend was implemented in **Flask** and deployed on **Azure App Service** for scalability and high availability.

## 📁 Project Structure
- **Dataset**: A CSV file simulating engagement metrics, stored in Astra DB.
- **Langflow Workflow**: Contains the flow for analyzing and querying data.
- **Scripts**:
  - Python Script for backened.
  - React Script for frontend.
- **Demo Video**: A walkthrough of the project.

---

## 📊 Key Results
- Instagram posts drive 1.5x more likes compared to Twitter posts.
- The average likes on Instagram posts are 570.
- Instagram Reels generate 2x more engagement compared to other formats.

---

## 🎥 Demo Video
[Watch the Project Demo on YouTube](#) *(Insert your video link here)

---
