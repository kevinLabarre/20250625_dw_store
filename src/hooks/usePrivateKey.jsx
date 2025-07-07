// Coté client, mm si je met les variables dans un fichier .js / .jsx , ces données sont visibles
// Idéalement, pour des clés privés, les récupérer via requete HTTTP sur un serveur back

// Ca na'aurait pas fait de différence de les stocker dans le .env

export const usePrivateKey = () => {
  // Pour que les clés ne soient pas accessible, l'idéal serait d'aller les récup via le back

  const env = import.meta.env.VITE_ENVIRONMENT;

  let privateKey;

  if (env === "development") {
    privateKey = "Private_key_dev";
  } else if (env === "production") {
    privateKey = "Private_key_Prod";
  }

  return privateKey;
};
