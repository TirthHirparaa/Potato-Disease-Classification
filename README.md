# 🥔 Potato Disease Classification

A full-stack AI/ML application that classifies potato leaf diseases using **TensorFlow**, **FastAPI**, and **ReactJS**.

## 🚀 Features

- 🌱 Potato leaf disease classification
- 🤖 TensorFlow deep learning model
- ⚡ FastAPI backend for predictions
- 💻 ReactJS frontend
- 📷 Image upload for disease detection
- 🔗 Frontend and backend integration

## 🛠️ Tech Stack

- **Frontend:** ReactJS
- **Backend:** FastAPI
- **Machine Learning:** TensorFlow / Keras
- **Language:** Python, JavaScript
- **Model:** `potatoes.h5`

## 📁 Project Structure

```text
Potato-Disease-Classification/
│
├── api/
│   ├── main.py
│   ├── main-tf-serving.py
│   ├── potatoes.h5
│   ├── requirements.txt
│   └── test.py
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── package-lock.json
│
├── Models/
├── Potato_Disease_Classification.ipynb
├── potato_disease_classification.py
└── README.md
```

## ▶️ How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/TirthHirparaa/Potato-Disease-Classification.git
cd Potato-Disease-Classification
```

### 2. Setup Python Environment

Make sure **Python 3.11** is installed.

Create a virtual environment:

```bash
py -3.11 -m venv venv
```

Activate the virtual environment.

**Windows PowerShell:**

```powershell
.\venv\Scripts\Activate.ps1
```

### 3. Install Backend Dependencies

From the project root directory:

```powershell
python -m pip install --upgrade pip
python -m pip install -r api\requirements.txt
```

### 4. Start the Backend

Run:

```powershell
python api\main.py
```

The FastAPI backend will start at:

```text
http://localhost:8000
```

API documentation:

```text
http://localhost:8000/docs
```

### 5. Setup the Frontend

Open a **new terminal** and go to the Frontend directory:

```powershell
cd Frontend
```

Install the required packages:

```powershell
npm install
```

### 6. Start the Frontend

Run:

```powershell
npm start
```

The React application will open at:

```text
http://localhost:3000
```

## 🔄 Application Flow

```text
User uploads potato leaf image
            ↓
      ReactJS Frontend
            ↓
       FastAPI Backend
            ↓
    TensorFlow/Keras Model
            ↓
    Disease Classification
            ↓
       Result displayed
```

## 📝 Notes

- Make sure the **backend is running before using the frontend**.
- The trained model `potatoes.h5` is included in the `api` folder.
- Python **3.11** is recommended for compatibility with the required TensorFlow packages.
- Node.js and npm are required to run the React frontend.

## 👨‍💻 Author

**Tirth Hirpara**
