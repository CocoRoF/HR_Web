# Python 3.10.2 이미지 사용
FROM python:3.10.2

# 환경변수 설정
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# 작업 디렉토리 설정
WORKDIR /code

# 의존성 파일 복사 및 설치
COPY requirements.txt ./    
RUN python3 -m pip install --upgrade pip setuptools
RUN pip install -r requirements.txt

# 나머지 프로젝트 파일 복사
COPY . ./

# 사용자 생성 및 소유권 설정
RUN useradd -M -s /bin/false cocorof || true
RUN chown -R cocorof:cocorof /code
RUN chmod -R 777 /code

EXPOSE 8000