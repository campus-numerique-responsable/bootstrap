# Installer JDK 17
https://download.oracle.com/java/17/archive/jdk-17.0.4.1_windows-x64_bin.exe

# Paramétrer la variable d'environnement ``JAVA_HOME``
https://www.ibm.com/docs/fr/rational-clearquest/8.0.1?topic=gskit-setting-java-home-environment-variable

Le chemin par défaut est ``C:\Program Files\Java\jdk-17.0.4.1``

# Installer Docker
Windows (avec WSL2) : https://docs.docker.com/desktop/windows/wsl/


# Builder avec Maven
```
.\mvnw.cmd clean package -DskipTests
```

# Lancer le conteneur
```
docker-compose up --build
```

# Tester
Dans un navigateur, entrer l'url ``http://localhost:8080/ping``