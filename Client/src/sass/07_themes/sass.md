# PARTIELS

## 1 Dans utils,

vous rangez vos variables, fonctions, mixins et les %placeholders pour les extensions (si vous en utilisez) ;

## 2 Dans vendors

vendors

## 3 Dans base

vous rangez les fichiers qui définissent les fondations de votre site, par exemple la police de caractères et les normes que vous voulez appliquer sur tout votre site,
telles que le box-sizing ;

## 4 Dans components

vous rangez les blocs BEM qui sont plus indépendants, comme les boutons ;

## 5 Dans layouts

vous mettez vos blocs BEM
qui contiennent ce qui est réutilisable, par exemple un header pour les mises en page de grande taille
ou un footer ;

## 6 Dans pages

vous rangez les blocs BEM qui ne s’appliquent qu’à une seule page. Vous utilisez des boutons dans tout votre site, en revanche votre page d’accueil comporte une section Citation
et une grille de projets qui ne sont employés nulle part ailleurs.
En d’autres termes, pages/ contient des règles spécifiques à une
seule page qui ne seront pas réutilisées ailleurs ;

## 7 Dans themes

c’est ici que vous stockez le code thématique, par exemple un style customisé pour Noël ou pour l’été.
On ne l’utilisera pas dans notre site ;

---
