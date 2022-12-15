# Aplicação de cadastro de Livros
# FRONTEND e BACKEND com mongo-express em diferentes containers

## Para rodar com docker compose:
1- Tenha o docker instalado  
2- Faça o clone deste projeto  
3- Rode "docker compose up -d --build" dentro da pasta da aplicação  


## Para rodar com Kubernetes/Minikube
1 - Instale o Minikube e o kubectl  
2 - Clone este projeto  
3 - Rode "minikube start --driver=docker"  
4 - Rode kubectl apply -f deployment.yaml  
5 - Rode kubectl get pods para verificar se está rodando  
6 - Rode "minikube dashboard"  