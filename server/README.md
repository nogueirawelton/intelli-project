## 🚀 Como rodar o projeto

### Instale as dependências

```bash
$ composer install
```

### Rode o docker

```bash
$ docker compose up -d
```

### Configure o banco de dados:
> No arquivo .env configura a conexão com o banco de dados

### Rode as migrations:
```bash
$ php bin/console doctrine:migrations:migrate
```

### Criar usuário admin
```bash
$ php bin/console doctrine:fixtures:load
```

### Rode a projeto:
```bash
$ php -S localhost:8000 -t public
```

O projeto estará disponível pelo endereço http://localhost:8000

### Usuário admin
> login: admin@intellichat.com
> senha: admin

## Como fazer manutenção do projeto

### Criar novas entities
```bash
$ php bin/console make:entity <Nome da entity>
```

### Criar novas migrations
```bash
$ php bin/console make:migration
```