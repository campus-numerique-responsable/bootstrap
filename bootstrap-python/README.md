# Télécharger python 3.10
https://www.python.org/downloads/release/python-3106/

# Installer Docker
Windows (avec WSL2) : https://docs.docker.com/desktop/windows/wsl/

# Optionnel : Installer Flask dans un virtualenv
A faire si vous ne souhaitez pas passer par Docker, ou si vous souhaitez avoir l'autocomplétion du framework avec votre IDE
```shell
py -3 -m venv venv

venv\Scripts\activate

pip install Flask
```

Si PowerShell refuse l'exécution de scripts, ouvrez un powershell en tant qu'admin, et lancer : 
```
Set-ExecutionPolicy Unrestricted
```

# Lancer le conteneur Docker
```
docker-compose up --build
```

# Tester
Ouvrir un navigateur et aller sur ``http://127.0.0.1:5000/ping``
