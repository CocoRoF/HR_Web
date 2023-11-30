# CharField: 이 필드는 문자열을 나타내며 텍스트 데이터를 저장하는 데 사용됩니다. max_length 매개변수를 사용하여 문자열의 최대 길이를 지정할 수 있습니다.
# IntegerField: 이 필드는 정수 값을 나타냅니다. 양수와 음수 정수 모두를 특정 범위 내에서 저장할 수 있습니다.
# FloatField: 이 필드는 소수점 숫자를 나타냅니다. 지정된 소수 자릿수를 가진 부동 소수점 숫자를 저장할 수 있습니다.
# BooleanField: 이 필드는 불리언 값(True 또는 False)을 나타냅니다. 이진 값이나 플래그를 저장하는 데 사용할 수 있습니다.
# DateField: 이 필드는 날짜 값을 나타냅니다. "YYYY-MM-DD" 형식으로 날짜를 저장할 수 있습니다.
# DateTimeField: 이 필드는 날짜와 시간 값을 나타냅니다. "YYYY-MM-DD HH:MM:SS" 형식으로 날짜와 시간 정보를 모두 저장할 수 있습니다.
# EmailField: 이 필드는 이메일 주소를 나타냅니다. 입력된 값이 유효한 이메일 주소인지를 검증합니다.
# FileField: 이 필드는 파일 업로드를 나타냅니다. 파일 경로나 실제 파일 객체를 저장할 수 있습니다.
# ForeignKey: 이 필드는 두 모델 간의 다대일 관계를 정의하는 데 사용됩니다. 다른 모델을 외래 키로 참조하는 데 사용됩니다. 이 필드는 관련 모델을 지정해야 하며, 일대다와 같은 관계를 설정하는 데 사용할 수 있습니다.
# ManyToManyField: 이 필드는 두 모델 간의 다대다 관계를 정의하는 데 사용됩니다. 하나의 모델 인스턴스를 다른 모델 인스턴스와 여러 개 관련시킬 수 있습니다. 이 필드는 관련 모델을 지정해야 하며, 관계를 관리하기 위해 중간 테이블을 생성합니다.

from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        return self.title