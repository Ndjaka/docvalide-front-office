
/**

 Calculate the price based on the birth department and town of residence.
 @param {string} birth_department - The birth department.
 @param {string} townOfResidence - The town of residence.
 @returns {number|undefined} - The calculated price or undefined if no match is found.
 */
const computePrice = (birth_department: string, townOfResidence: string): number | undefined => {
  if (townOfResidence?.match(/^ngaoundéré$/i) && birth_department?.match(/^mayo banyo$/i)) {
    return 7000;
  } else if (townOfResidence?.match(/^banyo$/i) && birth_department?.match(/^mayo banyo$/i)) {
    return 5000;
  } else if (townOfResidence?.match(/^meiganga$/i) && birth_department?.match(/^mbéré$/i)) {
    return 5200;
  } else if (townOfResidence?.match(/^ngaoundéré$/i) && birth_department?.match(/^vina$/i)) {
    return 5500;
  } else if (townOfResidence?.match(/^tibati$/i) && birth_department?.match(/^djérem$/i)) {
    return 5200;
  } else if (
    townOfResidence?.match(/^tignère$/i) &&  birth_department?.match(/^faro et déo$/i)
  ) {
    return 5000;
  } else if (
    (townOfResidence?.match(/^banyo|meiganga|ngaoundéré|tibati|ngaoundal|belel$/i) && birth_department?.match(/^faro et déo?$/i)) ||
    (townOfResidence?.match(/^banyo|meiganga|ngaoundéré|tignère|ngaoundal|belel$/i) && birth_department?.match(/^djérem$/i)) ||
    (townOfResidence?.match(/^banyo|ngaoundéré|tibati|tignère|ngaoundal|belel$/i) && birth_department?.match(/^mbéré$/i)) ||
    (townOfResidence?.match(/^banyo|meiganga|tibati|tignère|ngaoundal|belel$/i) && birth_department?.match(/^vina$/i)) ||
    (townOfResidence?.match(/^éssé|ntui|nkoteng|mbandjock$/i) && birth_department?.match(/^mfoundi$/i))
  ) {
    return 7000;
  } else if (townOfResidence?.match(/^endom$/i) && birth_department?.match(/^mfoundi$/i)) {
    return 6500;
  } else if (birth_department?.match(/^mfoundi$/i) && townOfResidence?.match(/^éséka$/i)) {
    return 7000;
  } else if ( birth_department?.match(/^nyong et ékélé$/i) && townOfResidence?.match(/^yaoundé$/i)
  ) {
    return 7000;
  } else if (
    birth_department?.match(/^mbam et inoubou$/i) &&  townOfResidence?.match(/^yaoundé$/i)
  ) {
    return 6500;
  } else if (birth_department?.match(/^mfoundi$/i)  && townOfResidence?.match(/^bafia$/i)) {
    return 6500;
  } else if (
    townOfResidence?.match(/^akonolinga|ntui|mfou|ngoumou|monatélé|mbalmayo|bafia$/i) &&  birth_department?.match(/^nyong et ékélé$/i)
  ) {
    return 8000;
  } else if (
    townOfResidence?.match(/^ayos|éssé|mengang|obala|endom|okola$/i) &&  birth_department?.match(/^nyong et ékélé$/i)
  ) {
    return 8500;
  }else   if (
    birth_department?.match(/^haute sanaga$/i)  && townOfResidence?.match(/^éséka$/i)) {
    return 8500;
  } else if (
    birth_department?.match(/^mfoundi$/i) && townOfResidence?.match(/^nanga éboko$/i)) {
    return 7000;
  } else if (
    birth_department?.match(/^haute sanaga$/i) && townOfResidence?.match(/^yaoundé$/i)) {
    return 7000;
  } else if (
    birth_department?.match(/^mefou et afamba$/i) && townOfResidence?.match(/^éséka$/i)) {
    return 8000;
  } else if (
    birth_department?.match(/^nyong et ékélé$/i) && townOfResidence?.match(/^mfou$/i)) {
    return 8000;
  } else if (townOfResidence?.match(/^ayos|monatélé|mengang|okola|akonolinga|ntui|mbalmayo|bafia$/i) && birth_department?.match(/^mefou et afamba$/i)) {
    return 7500;
  }else  if (townOfResidence?.match(/^ngoumou$/i) && birth_department?.match(/^mefou et afamba$/i)) {
    return 6500;
  } else if (townOfResidence?.match(/^mfou$/i) && birth_department?.match(/^mefou et akono$/i)
  ) {
    return 6500;
  } else if (townOfResidence?.match(/^nanga éboko$/i) &&  birth_department?.match(/^mefou et afamba$/i)
  ) {
    return 8000;
  } else if (townOfResidence?.match(/^mfou$/i) && birth_department?.match(/^haute sanaga$/i)
  ) {
    return 8000;
  } else if (townOfResidence?.match(/^éssé$/i) && birth_department?.match(/^mefou et afamba$/i)) {
    return 6500;
  }else if (townOfResidence?.match(/^(obala|ntui|soa|mfou|ngoumou|mbalmayo|bafia)$/i) && birth_department?.match(/^nyong et mfoumou$/i)) {
    return 7500;
  } else if (townOfResidence?.match(/^nanga éboko$/i) && birth_department?.match(/^nyong et mfoumou$/i)) {
    return 8000;
  } else if (
    townOfResidence?.match(/^akonolinga$/i) &&
    birth_department?.match(/^haute sanaga$/i)
  ) {
    return 8000;
  } else if (
    townOfResidence?.match(/^(monatélé|akonolinga|ngoumou|mbalmayo|mfou|nanga éboko|bafia|éséka)$/i) &&
    birth_department?.match(/^mbam et kim$/i)
  ) {
    return 7500;
  } else if (
    townOfResidence?.match(/^(soa|mengang|endom|éssé|okola)$/i) &&
    birth_department?.match(/^mbam et kim$/i)
  ) {
    return 8000;
  } else if (
    townOfResidence?.match(/^yaoundé$/i) &&
    birth_department?.match(/^mbam et kim$/i)) {
    return 7000;
  }else if (
    townOfResidence?.match(/^ayos|éssé|soa|obala|monatélé|mengang|endom|okola|akonolinga|ntui|ngoumou|mfou|bafia|éséka$/i) &&
    birth_department?.match(/^nyong et so'o$/i)
  ) {
    return 7500;
  } else if (townOfResidence?.match(/^nanga éboko$/i) && birth_department?.match(/^nyong et so'o$/i)) {
    return 7500;
  } else if (
    townOfResidence?.match(/^ayos|éssé|obala|mengang|endom|okola$/i) &&
    birth_department?.match(/^nyong et so'o$/i)
  ) {
    return 7500;
  } else if (
    townOfResidence?.match(/^ayos|éssé|monatélé|obala|mengang|endom|okola|akonolinga|mfou|ntui|ngoumou|bafia|éséka$/i) &&
    birth_department?.match(/^haute sanaga$/i)
  ) {
    return 8000;
  } else if (townOfResidence?.match(/^mbalmayo$/i) && birth_department?.match(/^haute sanaga$/i)) {
    return 7500;
  } else if (
    townOfResidence?.match(/^monatélé|akonolinga|ntui|ngoumou|mfou|mbalmayo|nanga éboko|éséka$/i) &&
    birth_department?.match(/^mbam et inoubou$/i)
  ) {
    return 7500;
  } else if (
    townOfResidence?.match(/^ayos|soa|éséka|mengang|endom|okola$/i) &&
    birth_department?.match(/^mbam et inoubou$/i)
  ) {
    return 7500;
  } else if (
    townOfResidence?.match(/^akonolinga|ntui|mfou|ngoumou|monatélé|mbalmayo|nanga éboko|bafia$/i) &&
    birth_department?.match(/^nyong et ékélé$/i)
  ) {
    return 7500;
  } else if (
    townOfResidence?.match(/^ayos|éssé|mengang|obala|endom|okola$/i) &&
    birth_department?.match(/^nyong et ékélé$/i)
  ) {
    return 8000;
  } else if (
    townOfResidence?.match(/^ntui|mfou|ngoumou|mbalmayo|nanga éboko|éséka|bafia$/i) &&
    birth_department?.match(/^lékié$/i)
  ) {
    return 7000;
  } else if (
    townOfResidence?.match(/^ayos|éssé|mengang|endom|obala|okola$/i) &&
    birth_department?.match(/^lékié$/i)
  ) {
    return 7000;
  } else if (
    townOfResidence?.match(/^akonolinga$/i) &&
    birth_department?.match(/^lékié$/i)
  ) {
    return 7500;
  }else if (townOfResidence?.match(/^monatélé$/i) && birth_department?.match(/^nyong et mfoumou$/i)) {
    return 7500;
  } else if (townOfResidence?.match(/^yaoundé$/i) && birth_department?.match(/^mfoundi$/i)) {
    return 5000;
  } else if (townOfResidence?.match(/^akonolinga$/i) && birth_department?.match(/^nyong et mfoumou$/i)) {
    return 4700;
  } else if (townOfResidence?.match(/^mfou$/i) && birth_department?.match(/^mefou et afamba$/i)) {
    return 4500;
  }else  if (
    townOfResidence?.match(/^ngoumou$/i) &&
    birth_department?.match(/^mefou et akono$/i)
  ) {
    return 4500;
  } else if (
    townOfResidence?.match(/^mbalmayo$/i) &&
    birth_department?.match(/^nyong et so'o$/i)
  ) {
    return 4500;
  } else if (
    townOfResidence?.match(/^ntui$/i) &&
    birth_department?.match(/^mbam et kim/i)
  ) {
    return 4500;
  } else if (
    townOfResidence?.match(/^nanga éboko$/i) &&
    birth_department?.match(/^haute sanaga$/i)
  ) {
    return 4500;
  } else if (
    townOfResidence?.match(/^bafia$/i) &&
    birth_department?.match(/^mbam et inoubou$/i)
  ) {
    return 4500;
  } else if (
    townOfResidence?.match(/^éséka$/i) &&
    birth_department?.match(/^nyong et ékélé$/i)
  ) {
    return 4500;
  }else  if (
    townOfResidence?.match(/^ngoumou$/i) &&
    birth_department?.match(/^mefou et akono$/i)
  ) {
    return 4500;
  } else if (
    townOfResidence?.match(/^mbalmayo$/i) &&
    birth_department?.match(/^nyong et so'o$/i)
  ) {
    return 4500;
  } else if (
    townOfResidence?.match(/^ntui$/i) &&
    birth_department?.match(/^mbam et kim/i)
  ) {
    return 4500;
  } else if (
    townOfResidence?.match(/^nanga éboko$/i) &&
    birth_department?.match(/^haute sanaga$/i)
  ) {
    return 4500;
  } else if (
    townOfResidence?.match(/^bafia$/i) &&
    birth_department?.match(/^mbam et inoubou$/i)
  ) {
    return 4500;
  } else if (
    townOfResidence?.match(/^éséka$/i) &&
    birth_department?.match(/^nyong et ékélé$/i)
  ) {
    return 4500;
  }else   if (townOfResidence?.match(/^monatélé$/i) && birth_department?.match(/^lékié$/i)) {
    return 4500;
  } else if (townOfResidence?.match(/^akonolinga$/i) && birth_department?.match(/^mfoundi$/i)) {
    return 5500;
  } else if (townOfResidence?.match(/^yaoundé$/i) && birth_department?.match(/^nyong et mfoumou$/i)) {
    return 5500;
  } else if (townOfResidence?.match(/^mbalmayo$/i) && birth_department?.match(/^mfoundi$/i)) {
    return 5500;
  } else if (townOfResidence?.match(/^ayos$/i) && birth_department?.match(/^nyong et mfoumou$/i)) {
    return 6000;
  } else if (townOfResidence?.match(/^mengang$/i) && birth_department?.match(/^nyong et mfoumou$/i)) {
    return 5000;
  }else if (townOfResidence?.match(/^soa$/i) && birth_department?.match(/^mfoundi$/i)) {
    return 5000;
  } else if (townOfResidence?.match(/^yaoundé$/i) && birth_department?.match(/^nyong et so'o$/i)) {
    return 5500;
  } else if (townOfResidence?.match(/^monatélé$/i) && birth_department?.match(/^mfoundi$/i)) {
    return 5500;
  } else if (townOfResidence?.match(/^yaoundé$/i) && birth_department?.match(/^lékié$/i)) {
    return 5500;
  } else if (townOfResidence?.match(/^obala$/i) && birth_department?.match(/^mfoundi$/i)) {
    return 6000;
  } else if (townOfResidence?.match(/^mfou$/i) && birth_department?.match(/^mfoundi$/i)) {
    return 5500;
  }else if (townOfResidence?.match(/^yaoundé$/i) && birth_department?.match(/^mefou et afamba$/i)) {
    return 5500;
  } else if (townOfResidence?.match(/^ngoumou$/i) && birth_department?.match(/^mfoundi$/i)) {
    return 5500;
  } else if (townOfResidence?.match(/^yaoundé$/i) && birth_department?.match(/^mefou et akono$/i)) {
    return 5500;
  } else if (townOfResidence?.match(/^endom$/i) && birth_department?.match(/^nyong et mfoumou$/i)) {
    return 5000;
  } else if (townOfResidence?.match(/^mengang$/i) && birth_department?.match(/^mfoundi$/i)) {
    return 5500;
  } else if (
    (townOfResidence?.match(/^abong mbang$/i) ||
      townOfResidence?.match(/^batouri$/i) ||
      townOfResidence?.match(/^yokadouma$/i)) &&
    birth_department?.match(/^lom et djérem$/i)
  ) {
    return 6000;
  }else if (
    townOfResidence?.match(/^(bertoua|abong mbang|batouri)$/i) &&
    birth_department?.match(/^mboumba et ngoko$/i)
  ) {
    return 6000;
  } else if (
    townOfResidence?.match(/^bertoua$/i) &&
    birth_department?.match(/^lom et djérem$/i)
  ) {
    return 4700;
  } else if (
    townOfResidence?.match(/^batouri$/i) &&
    birth_department?.match(/^kadey$/i)
  ) {
    return 4700;
  } else if (
    townOfResidence?.match(/^abong mbang$/i) &&
    birth_department?.match(/^lom et djérem$/i)
  ) {
    return 4700;
  } else if (
    townOfResidence?.match(/^yokadouma$/i) &&
    birth_department?.match(/^mboumba et ngoko$/i)
  ) {
    return 4700;
  } else if (
    townOfResidence?.match(/^(kousseri|maroua|mokolo|mora|yagoua)$/i) &&
    birth_department?.match(/^mayo kani$/i)
  ) {
    return 7000;
  } else if (
    townOfResidence?.match(/^(kaélé|maroua|mokolo|mora|yagoua)$/i) &&
    birth_department?.match(/^logone et chari$/i)
  ) {
    return 7000;
  } else if (
    townOfResidence?.match(/^(kaélé|kousseri|mokolo|mora|yagoua)$/i) &&
    birth_department?.match(/^diamaré$/i)
  ) {
    return 7000;
  } else if (
    townOfResidence?.match(/^(kaélé|kousseri|maroua|mokolo|yagoua)$/i) &&
    birth_department?.match(/^mayo tsanaga$/i)
  ) {
    return 7000;
  } else if (
    townOfResidence?.match(/^(kaélé|kousseri|maroua|mokolo|yagoua)$/i) &&
    birth_department?.match(/^mayo sava$/i)
  ) {
    return 7000;
  }else if (
    townOfResidence?.match(/^(kaélé|kousseri|maroua|mokolo|mora)$/i) &&
    birth_department?.match(/^mayo danay$/i)
  ) {
    return 7000;
  } else if (
    townOfResidence?.match(/^kaélé$/i) &&
    birth_department?.match(/^mayo kani$/i)
  ) {
    return 6500;
  } else if (
    townOfResidence?.match(/^kousseri$/i) &&
    birth_department?.match(/^logone et chari$/i)
  ) {
    return 4700;
  } else if (
    townOfResidence?.match(/^maroua$/i) &&
    birth_department?.match(/^diamaré$/i)
  ) {
    return 4700;
  } else if (
    townOfResidence?.match(/^mokolo$/i) &&
    birth_department?.match(/^mayo tsanaga$/i)
  ) {
    return 4700;
  } else if (
    townOfResidence?.match(/^mora$/i) &&
    birth_department?.match(/^mayo sava$/i)
  ) {
    return 5500;
  } else if (
    townOfResidence?.match(/^yagoua$/i) &&
    birth_department?.match(/^mayo danay$/i)
  ) {
    return 5500;
  } else if (
    townOfResidence?.match(/^(édéa|nkongsamba|yabassi|mbanga)$/i) &&
    birth_department?.match(/^wouri$/i)
  ) {
    return 7000;
  } else if (
    townOfResidence?.match(/^(douala|nkongsamba|yabassi|mbanga)$/i) &&
    birth_department?.match(/^sanaga maritime$/i)
  ) {
    return 7000;
  } else if (
    townOfResidence?.match(/^(douala|édéa|yabassi)$/i) &&
    birth_department?.match(/^moungo$/i)
  ) {
    return 7000;
  } else if (
    townOfResidence?.match(/^(douala|édéa|nkongsamba|mbanga)$/i) &&
    birth_department?.match(/^nkam$/i)
  ) {
    return 7000;
  } else if (
    townOfResidence?.match(/^(douala|édéa|yabassi)$/i) &&
    birth_department?.match(/^mbanga$/i)
  ) {
    return 7000;
  }
}

export default computePrice;
