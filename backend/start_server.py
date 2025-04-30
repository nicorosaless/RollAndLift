import uvicorn

if __name__ == "__main__":
    # Listen on all interfaces, not just localhost
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
