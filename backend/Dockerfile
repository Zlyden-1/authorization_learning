FROM python:3.10-slim-buster
RUN apt-get update && apt-get install -y gcc libpq-dev
WORKDIR /app
COPY ./app /app/
RUN pip install --no-cache-dir -r requirements.txt
# RUN python manage.py colle\ctstatic --noinput