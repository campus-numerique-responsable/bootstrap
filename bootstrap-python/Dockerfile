FROM python:alpine3.10

WORKDIR /app

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . .

ENTRYPOINT [ "python3" ]

CMD [ "app.py" ]