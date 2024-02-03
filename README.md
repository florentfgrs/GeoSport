# GeoSport

Ce projet est un visualiseur géographique pour visualiser des données de sport. Ce projet est un fork du projet [Mviewer](https://github.com/geobretagne/mviewer).

## Déploiement

Le déploiement se passe en trois étapes :

- Cloner le projet dans le dossier de votre choix
- Copier ce dossier dans le dossier /var/www/ ( ou autres dossiers de déploiement Apache)
  Vous avez maintenant un visualiseur géographique fonctionnel avec les couches de la Région Bretagne
- Si vous souhaitez publier vos propres couches/thèmes, modifiez le fichier `apps/default.xml`

## Fichier apps/default.xml

Le fichier de configuration permet la personnalisation des thèmes/couches du visualiseur ; une configuration par
défaut est fournie dans `apps/default.xml`, vous pouvez le dupliquer et l'adapter à vos besoins en vous aidant de la [documentation.](http://mviewerdoc.readthedocs.io/fr/latest/)
