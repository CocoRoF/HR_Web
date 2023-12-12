from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import BasicResponseModelSerializer
from rest_framework.permissions import AllowAny
from nlp_model.utils.util_module import gpt_norm_responder

class BasicResponseModelView(APIView):
    permission_classes = (AllowAny, )
    def post(self, request, *args, **kwargs):
        serializer = BasicResponseModelSerializer(data=request.data)
        
        if serializer.is_valid():
            model = serializer.validated_data.get('model')
            inputText = serializer.validated_data.get('inputText')
            result = gpt_norm_responder(inputText, model_name=model)
            return Response({"response": result})
        
        return Response(serializer.errors, status=400)
