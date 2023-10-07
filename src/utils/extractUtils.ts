const computePrice = (
  tribunal: string,
  residence: string
): number | undefined => {
  if (residence?.match(/^ngaoundéré$/i) && tribunal?.match(/^mayo banyo$/i)) {
    return 7000;
  } else if (residence?.match(/^banyo$/i) && tribunal?.match(/^mayo banyo$/i)) {
    return 5500;
  } else if (residence?.match(/^meiganga$/i) && tribunal?.match(/^mbéré$/i)) {
    return 5500;
  } else if (residence?.match(/^ngaoundéré$/i) && tribunal?.match(/^vina$/i)) {
    return 5500;
  } else if (residence?.match(/^tibati$/i) && tribunal?.match(/^djérem$/i)) {
    return 5500;
  } else if (
    residence?.match(/^tignère$/i) &&
    tribunal?.match(/^faro et déo$/i)
  ) {
    return 5500;
  } else if (
    /*tous les departements de la region de l'adamaoua sauf à meiganga
     *autrement dit le client vie dans la region de l'adamaoua
     *est né dans le departement de meiganga
     *mais vit dans un autre departement
     **/
    residence?.match(/^banyo|ngaoundéré|tibati|tignère$/i) &&
    tribunal?.match(/^mbéré$/i)
  ) {
    return 7500;
  } else if (
    residence?.match(/^banyo|meiganga|tibati|tignère$/i) &&
    tribunal?.match(/^vina$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region de l'adamaoua sauf à tibati
     *autrement dit le client vie dans la region de l'adamaoua
     *est né dans le departement de tibati
     *mais vit dans un autre departement
     **/
    residence?.match(/^banyo|meiganga|ngaoundéré|tignère$/i) &&
    tribunal?.match(/^djérem$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region de l'adamaoua sauf à tignere
     *autrement dit le client vie dans la region de l'adamaoua
     *est né dans le departement de tignere
     *mais vit dans un autre departement
     **/
    residence?.match(/^banyo|meiganga|ngaoundéré|tibati$/i) &&
    tribunal?.match(/^faro et déo$/i)
  ) {
    return 7500;
  }
    ////////// FIN REGION DE L'ADAMAOUA
    /// DEBUT AVEC REGION DU CENTRE
  /*tous les departements de la region du CENTRE sauf à YAOUNDE
   *autrement dit le client vie dans la region de CENTRE
   *est né dans le departement de YAOUNDE
   *mais vit dans un autre departement
   *retiré akga et mfou
   **/
  else if (
    residence?.match(/^ayos|éssé|ntui|nkoteng|mbandjock$/i) &&
    tribunal?.match(/^mfoundi$/i)
  ) {
    return 7000;
  }

  //endom vers yaoundé
  else if (residence?.match(/^endom$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 8000;
  }
  //eseka vers yaoundé
  else if (residence?.match(/^éséka$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 7500;
  }
  //yaoundé vers eséka
  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/nyong et ékélé$/i)
  ) {
    return 7500;
  }

  //yaoundé vers bafia
  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/^mbam et inoubou$/i)
  ) {
    return 7000;
  }

  //bafia vers yaoundé
  else if (residence?.match(/^bafia$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 7000;
  }

  // les autres départements vers éséka (exclu yaoundé)
  else if (
    residence?.match(
      /^ayos|éssé|mengang|obala|okola|akonolinga|ntui|mfou|ngoumou|monatélé|bafia$/i
    ) &&
    tribunal?.match(/^nyong et ékélé$/i)
  ) {
    return 9000;
  } else if (
    residence?.match(/^mbalmayo$/i) &&
    tribunal?.match(/^nyong et ékélé$/i)
  ) {
    return 8500;
  } else if (
    residence?.match(/^endom$/i) &&
    tribunal?.match(/^nyong et ékélé$/i)
  ) {
    return 9000;
  }
  //nanga vers eseka
  else if (
    residence?.match(/nanga éboko$/i) &&
    tribunal?.match(/^nyong et ékélé$/i)
  ) {
    return 9000;
  }
  // eseka vers nanga
  else if (residence?.match(/^éséka$/i) && tribunal?.match(/^haute sanaga$/i)) {
    return 9000;
  }

  //nanga eboko vers yaoundé
  else if (residence?.match(/^nanga éboko$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 7500;
  }
  //yaoundé vers nanga eboko
  else if (residence?.match(/^yaoundé$/i) && tribunal?.match(/^haute sanaga$/i)) {
    return 7500;
  } else if (
    /*tous les departements de la region du CENTRE sauf à mfou
     *autrement dit le client vie dans la region de CENTRE
     *est né dans le departement de mfou
     *mais vit dans un autre departement ou une autree ville qui n'est pas un département
     *ydé retiré
     **/
    residence?.match(
      /^ayos|obala|monatélé|mengang|okola|akonolinga|ntui|mbalmayo|bafia|éséka$/i
    ) &&
    tribunal?.match(/^mefou et afamba$/i)
  ) {
    return 8000;
  } else if (
    residence?.match(/^endom$/i) &&
    tribunal?.match(/^mefou et afamba$/i)
  ) {
    return 9000;
  }
  //ngoumou vers mfou
  else if (
    residence?.match(/^ngoumou$/i) &&
    tribunal?.match(/^mefou et afamba$/i)
  ) {
    return 7000;
  } else if (
    residence?.match(/^mfou$/i) &&
    tribunal?.match(/^mefou et akono$/i)
  ) {
    return 7000;
  }
  //nanga vers mfou
  else if (
    residence?.match(/^nanga éboko$/i) &&
    tribunal?.match(/^mefou et afamba$/i)
  ) {
    return 9000;
  }
  //mfou vers nanga
  else if (residence?.match(/^mfou$/i) && tribunal?.match(/^haute sanaga$/i)) {
    return 9000;
  }
  //éssé vers mfou
  else if (residence?.match(/^éssé$/i) && tribunal?.match(/^mefou et afamba$/i)) {
    return 7000;
  } else if (
    /*tous les departements de la region du CENTRE sauf à akonolinga
     *autrement dit le client vie dans la region de CENTRE
     *est né dans le departement de akonolinga
     *mais vit dans un autre departement
     **/
    residence?.match(
      /^obala|soa|ntui|mfou|ngoumou|mbalmayo|nanga éboko|bafia$/i
    ) &&
    tribunal?.match(/^nyong et mfoumou$/i)
  ) {
    return 8500;
  } else if (
    residence?.match(/^éséka$/i) &&
    tribunal?.match(/^nyong et mfoumou$/i)
  ) {
    return 8500;
  } else if (
    residence?.match(
      /^soa|ayos|mengang|obala|endom|éssé|monatélé|okola|akonolinga|ngoumou|mbalmayo|mfou|nanga éboko|bafia$/i
    ) &&
    tribunal?.match(/^mbam et kim$/i)
  ) {
    return 8500;
  } else if (residence?.match(/^éséka$/i) && tribunal?.match(/^mbam et kim$/i)) {
    return 9000;
  }
  //Yaoundé vers ntui
  else if (residence?.match(/^yaoundé$/i) && tribunal?.match(/^mbam et kim$/i)) {
    return 7000;
  }
  //ntui vers yaoundé
  else if (residence?.match(/^ntui$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 7000;
  } else if (
    residence?.match(
      /^monatélé|akonolinga|ntui|mbalmayo|nanga éboko|bafia|éséka$/i
    ) &&
    tribunal?.match(/^mefou et akono$/i)
  ) {
    return 8000;
  }
  //ayos mengang éssé endom okola->vers ngoumou
  else if (
    residence?.match(/^ayos|mengang|éssé|okola$/i) &&
    tribunal?.match(/^mefou et akono$/i)
  ) {
    return 8000;
  }
  //endom vers ngoumou
  else if (residence?.match(/^endom$/i) && tribunal?.match(/^mefou et akono$/i)) {
    return 9000;
  } else if (
    /*tous les departements de la region du CENTRE sauf à mbalmayo
     *autrement dit le client vie dans la region de CENTRE
     *est né dans le departement de mbalmayo
     *mais vit dans un autre departement
     **/
    residence?.match(
      /^ayos|éssé|soa|obala|monatélé|mengang|okola|akonolinga|ntui|ngoumou|mfou|bafia|éséka$/i
    ) &&
    tribunal?.match(/^nyong et so'o$/i)
  ) {
    return 8500;
  } else if (
    residence?.match(/^endom$/i) &&
    tribunal?.match(/^nyong et so'o$/i)
  ) {
    return 8500;
  }

  //nanga eboko vers mbalmayo
  else if (
    residence?.match(/^nanga éboko$/i) &&
    tribunal?.match(/^nyong et so'o$/i)
  ) {
    return 8500;
  }

  // ayos éssé soa obala endom mengang vers mbalmayo
  else if (
    residence?.match(/^éssé|obala|okola$/i) &&
    tribunal?.match(/^nyong et so'o$/i)
  ) {
    return 8000;
  }

  else if (
    residence?.match(/^mengang$/i) &&
    tribunal?.match(/^nyong et so'o$/i)
  ) {
    return 7500;
  }

  else if (
    residence?.match(/^ayos$/i) &&
    tribunal?.match(/^nyong et so'o$/i)
  ) {
    return 8500;
  }



  else if (
    residence?.match(/^endom$/i) &&
    tribunal?.match(/^nyong et so'o$/i)
  ) {
    return 8500;
  }


  else if (
    residence?.match(
      /^ayos|éssé|obala|mengang|okola|mfou|ntui|ngoumou|bafia$/i
    ) &&
    tribunal?.match(/^haute sanaga$/i)
  ) {
    return 8000;
  }

  else if (
    residence?.match(
      /^monatélé$/i
    ) &&
    tribunal?.match(/^haute sanaga$/i)
  ) {
    return 7500;
  }

  else if (residence?.match(/^akonolinga$/i ) && tribunal?.match(/^haute sanaga$/i) )

  {
    return 8500;
  }



  else if (residence?.match(/^éséka$/i) && tribunal?.match(/^haute sanaga$/i)) {
    return 9000;
  }

  else if (residence?.match(/^endom$/i) && tribunal?.match(/^haute sanaga$/i)) {
    return 9000;
  }

  // mbalmayo vers nanga eboko
  else if (
    residence?.match(/^mbalmayo$/i) &&
    tribunal?.match(/^haute sanaga$/i)
  ) {
    return 8500;
  }



  else if (
    residence?.match(/^ntui|ngoumou|mfou|nanga éboko$/i ) &&
    tribunal?.match(/^mbam et inoubou$/i)
  ) {
    return 7500;
  }


  else if (
    residence?.match(/^monatélé$/i ) &&
    tribunal?.match(/^mbam et inoubou$/i)
  ) {
    return 7000;
  }


  else if (
    residence?.match(/^akonolinga|mbalmayo$/i ) &&
    tribunal?.match(/^mbam et inoubou$/i)
  ) {
    return 8000;
  }



  else if (
    residence?.match(/^éséka$/i) &&
    tribunal?.match(/^mbam et inoubou$/i)
  ) {
    return 9000;
  }


  // aYos soa éssé mengang okoloa endom vers bafia
  else if (
    residence?.match(/^ayos|soa|mengang$/i) &&
    tribunal?.match(/^mbam et inoubou$/i)
  ) {
    return 8500;
  }


  else if (
    residence?.match(/^okola$/i) &&
    tribunal?.match(/^mbam et inoubou$/i)
  ) {
    return 7000;
  }


  else if (
    residence?.match(/^endom$/i) &&
    tribunal?.match(/^mbam et inoubou$/i)
  ) {
    return 9000;
  }

  else if (

    residence?.match(
      /^ntui|mfou|ngoumou|monatélé|mbalmayo|nanga éboko$/i
    ) &&
    tribunal?.match(/^nyong et ékélé$/i)
  ) {
    return 8500;
  }


  else if (
    residence?.match( /^bafia$/i) &&
    tribunal?.match(/^nyong et ékélé$/i)
  ) {
    return 9000;
  }



  else if (
    residence?.match(/^akonolinga$/i) &&
    tribunal?.match(/^nyong et ékélé$/i)
  ) {
    return 8500;
  }



  else if (
    residence?.match(/^ayos|éssé|mengang|obala|endom|okola$/i) &&
    tribunal?.match(/^nyong et ékélé$/i)
  ) {
    return 9000;
  }

  else if (
    residence?.match(/^ntui|ngoumou|mbalmayo|nanga éboko|éséka|bafia$/i) &&
    tribunal?.match(/^lékié$/i)
  ) {
    return 8500;
  }

  else if (residence?.match(/^mfou$/i) && tribunal?.match(/^lékié$/i)) {
    return 7500;
  }

    // vers monatélé
  //ayos essé megang endom obala okola vers monatélé
  else if (
    residence?.match(/^ayos|éssé|mengang|obala|endom|okola$/i) &&
    tribunal?.match(/^nyong et ékélé$/i)
  ) {
    return 9000;
  }




  else if (residence?.match(/^endom$/i) && tribunal?.match(/^lékié$/i)) {
    return 9000;
  }

  //akonolinga ->lekié(monatele)
  else if (residence?.match(/^akonolinga$/i) && tribunal?.match(/^lékié$/i)) {
    return 8500;
  }
  //monatele->akonolinga (nyong et mfomou)

  else if (
    residence?.match(/^monatélé$/i) &&
    tribunal?.match(/^nyong et mfoumou$/i)
  ) {
    return 8500;
  }

  // né dans le même departement et grandi dans le même departement dans la REGION DU CNETRE
  else if (residence?.match(/^yaoundé$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 5000;
  }

  else if (
    residence?.match(/^akonolinga$/i) &&
    tribunal?.match(/^nyong et mfoumou$/i)
  ) {
    return 4700;
  }


  else if (
    residence?.match(/^mfou$/i) &&
    tribunal?.match(/^mefou et afamba$/i)
  ) {
    return 4500;
  }

  else if (
    residence?.match(/^ngoumou$/i) &&
    tribunal?.match(/^mefou et akono$/i)
  ) {
    return 4500;
  } else if (
    residence?.match(/^mbalmayo$/i) &&
    tribunal?.match(/^nyong et so'o$/i)
  ) {
    return 4500;
  } else if (residence?.match(/^ntui$/i) && tribunal?.match(/^mbam et kim$/i)) {
    return 4500;
  } else if (
    residence?.match(/^nanga éboko$/i) &&
    tribunal?.match(/^haute sanaga$/i)
  ) {
    return 4500;
  } else if (
    residence?.match(/^bafia$/i) &&
    tribunal?.match(/^mbam et inoubou$/i)
  ) {
    return 4500;
  } else if (
    residence?.match(/^éséka$/i) &&
    tribunal?.match(/^nyong et ékélé$/i)
  ) {
    return 5000;
  } else if (residence?.match(/^monatélé$/i) && tribunal?.match(/^lékié$/i)) {
    return 4500;
  }
  /// akonolinga ->yaoundé
  else if (residence?.match(/^akonolinga$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 6000;
  }
  ///yaoundé->akonoliga
  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/^nyong et mfoumou$/i)
  ) {
    return 6000;
  }
  //mbalmayo->yaoundé
  else if (residence?.match(/^mbalmayo$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 6000;
  }
  /// ayos->akonolinga
  else if (
    residence?.match(/^ayos$/i) &&
    tribunal?.match(/^nyong et mfoumou$/i)
  ) {
    return 5500;
  }

  ///mengang->akonolinga
  else if (
    residence?.match(/^mengang$/i) &&
    tribunal?.match(/^nyong et mfoumou$/i)
  ) {
    return 5000;
  }
  /// soa->yaoundé
  else if (residence?.match(/^soa$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 5500;
  }
  /// yaoundé->mbalmayo
  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/^nyong et so'o$/i)
  ) {
    return 6000;
  }

  ///monatélé->yaoundé
  else if (residence?.match(/^monatélé$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 6500;
  }
  ///yaoundé->monatelé
  else if (residence?.match(/^yaoundé$/i) && tribunal?.match(/^lékié$/i)) {
    return 6500;
  }
  ///obala->yaoundé
  else if (residence?.match(/^obala$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 6000;
  }
  //mfou->yaoundé
  else if (residence?.match(/^mfou$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 6000;
  }
  // yaoundé->mfou
  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/^mefou et afamba$/i)
  ) {
    return 6000;
  }
  //ngoumou->mfo?undi|yaound(é|e|è)
  else if (residence?.match(/^ngoumou$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 5500;
  }
  //yaoundé->ngoumou
  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/^mefou et akono$/i)
  ) {
    return 6000;
  }
  // endom->akonolinga
  else if (
    residence?.match(/^endom$/i) &&
    tribunal?.match(/^nyong et mfoumou$/i)
  ) {
    return 5500;
  }
  //mengang->yaoundé
  else if (residence?.match(/^mengang$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 6000;
  }

    /////// FIN REGION DU CENTRE
    /////// DEBUT REGION DE L'EST

  /*tous les departements de la region de l'EST sauf à bertoua
   *autrement dit le client vie dans la region de l'EST
   *est né dans le departement de bertoua
   *mais vit dans un autre departement
   **/


  else if (
    residence?.match(/^abong mbang|batouri|yokadouma$/i) &&
    tribunal?.match(/^lom et djérem$/i)
  ) {
    return 7000;
  }

  else if (
    /*tous les departements de la region de l'EST sauf à abong-bang
     *autrement dit le client vie dans la region de l'EST
     *est né dans le departement de abong-bang
     *mais vit dans un autre departement
     **/
    residence?.match(/^bertoua|batouri|yokadouma$/i) &&
    tribunal?.match(/^haut nyong$/i)
  ) {
    return 7000;
  }


  else if (
    /*tous les departements de la region de l'EST sauf à batouri
     *autrement dit le client vie dans la region de l'EST
     *est né dans le departement de batouri
     *mais vit dans un autre departement
     **/
    residence?.match(/^bertoua|abong mbang|yokadouma$/i) &&
    tribunal?.match(/^kadey$/i)
  ) {
    return 7000;
  }

  else if (
    /*tous les departements de la region de l'EST sauf à yokadouma
     *autrement dit le client vie dans la region de l'EST
     *est né dans le departement de yokadouma
     *mais vit dans un autre departement
     **/
    residence?.match(/^bertoua|abong mbang|batouri$/i) &&
    tribunal?.match(/^mboumba et ngoko$/i)
  ) {
    return 7000;
  }
  // même region même departement REGION: EST

  else if (
    residence?.match(/^bertoua$/i) &&
    tribunal?.match(/^lom et djérem$/i)
  ) {
    return 5000;
  }


  else if (residence?.match(/^batouri$/i) && tribunal?.match(/^kadey$/i)) {
    return 5000;
  }

  else if (
    residence?.match(/^abong mbang$/i) &&
    tribunal?.match(/^haut nyong$/i)
  ) {
    return 5000;
  }

  else if (
    residence?.match(/^yokadouma$/i) &&
    tribunal?.match(/^mboumba et ngoko$/i)
  ) {
    return 5000;
  }
    ////// FIN REGION DE L'EST
    //// DEBUT REGION DE L'EXTREME NORD
  /*tous les departements de la region du L'EXTREME NORD sauf à KAELE
   *autrement dit le client vie dans la region de CENTRE
   *est né dans le departement de Kaele
   *mais vit dans un autre departement
   **/
  else if (
    residence?.match(/^kousseri|maroua|mokolo|mora|yagoua$/i) &&
    tribunal?.match(/^mayo kani$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du L'EXTREME NORD sauf à kousseri
     *autrement dit le client vie dans la region de CENTRE
     *est né dans le departement de kousseri
     *mais vit dans un autre departement
     **/
    residence?.match(/^kaélé|maroua|mokolo|mora|yagoua$/i) &&
    tribunal?.match(/^logone et chari$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du L'EXTREME NORD sauf à maroua
     *autrement dit le client vie dans la region de CENTRE
     *est né dans le departement de maroua
     *mais vit dans un autre departement
     **/
    residence?.match(/^kaélé|kousseri|mokolo|mora|yagoua$/i) &&
    tribunal?.match(/^diamaré$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du L'EXTREME NORD sauf à mokolo
     *autrement dit le client vie dans la region de CENTRE
     *est né dans le departement de mokolo
     *mais vit dans un autre departement
     **/
    residence?.match(/^kaélé|kousseri|maroua|mora|yagoua$/i) &&
    tribunal?.match(/^mayo tsanaga$/i)
  ) {
    return 7500;
  }

  else if (
    /*tous les departements de la region du L'EXTREME NORD sauf à mora
     *autrement dit le client vie dans la region de l'extreme nord
     *est né dans le departement de mora
     *mais vit dans un autre departement
     **/
    residence?.match(/^kaélé|kousseri|maroua|mokolo|yagoua$/i) &&
    tribunal?.match(/^mayo sava$/i)
  ) {
    return 7500;
  }


  else if (
    /*tous les departements de la region du L'EXTREME NORD sauf à yagoua
     *autrement dit le client vie dans la region de CENTRE
     *est né dans le departement de yagoua
     *mais vit dans un autre departement
     **/
    residence?.match(/^kaélé|kousseri|maroua|mokolo|mora$/i) &&
    tribunal?.match(/^mayo danay$/i)
  ) {
    return 7500;
  }

  // même region même departement REGION: EXTREME NORD
  else if (residence?.match(/^kaélé$/i) && tribunal?.match(/^mayo kani$/i)) {
    return 5500;
  }

  else if (
    residence?.match(/^kousseri$/i) &&
    tribunal?.match(/^logone et chari$/i)
  ) {
    return 5000;
  }

  else if (residence?.match(/^maroua$/i) && tribunal?.match(/^diamaré$/i)) {
    return 5000;
  }

  else if (
    residence?.match(/^mokolo$/i) &&
    tribunal?.match(/^mayo tsanaga$/i)
  ) {
    return 5000;
  }

  else if (residence?.match(/^mora$/i) && tribunal?.match(/^mayo sava$/i)) {
    return 5000;
  }

  else if (residence?.match(/^yagoua$/i) && tribunal?.match(/^mayo danay$/i)) {
    return 5500;
  }
    ////// FIN REGION DE L'EXTREME NORD
    //// DEBUT REGION DU LITTORAL
  /*tous les departements de la region du LITTORAL sauf à DOUALA
                *autrement dit le client vie dans la region de LITTORAL
                *est né dans le departement de DOUALA
                *mais vit dans un autre departement

                **/
  else if (
    residence?.match(/^édéa|nkongsamba|yabassi$/i) &&
    tribunal?.match(/^wouri$/i)
  ) {
    return 7000;
  }

  else if (
    /*tous les departements de la region du LITTORAL sauf à edea
     *autrement dit le client vie dans la region de LITTORAL
     *est né dans le departement de edea
     *mais vit dans un autre departement
     **/
    residence?.match(/^douala|nkongsamba|yabassi$/i) &&
    tribunal?.match(/^sanaga maritime$/i)
  ) {
    return 7000;
  }
  else if (
    /*tous les departements de la region du LITTORAL sauf à nkongsamba
     *autrement dit le client vie dans la region de LITTORAL
     *est né dans le departement de DOUALA
     *mais vit dans un autre departement
     **/
    residence?.match(/^douala|édéa|yabassi$/i) &&
    tribunal?.match(/^moungo$/i)
  ) {
    return 7000;
  }
  else if (
    /*tous les departements de la region du LITTORAL sauf à yabassi
     *autrement dit le client vie dans la region de LITTORAL
     *est né dans le departement de yabassi
     *mais vit dans un autre departement
     **/
    residence?.match(/^douala|édéa|nkongsamba$/i) &&
    tribunal?.match(/^nkam$/i)
  ) {
    return 7000;
  }
  // même region même departement REGION : LITTORAL
  else if (residence?.match(/^douala$/i) && tribunal?.match(/^wouri$/i)) {
    return 6000;
  } else if (
    residence?.match(/^édéa$/i) &&
    tribunal?.match(/^sanaga maritime$/i)
  ) {
    return 5000;
  } else if (residence?.match(/^yabassi$/i) && tribunal?.match(/^nkam$/i)) {
    return 5000;
  } else if (residence?.match(/^nkongsamba$/i) && tribunal?.match(/^moungo$/i)) {
    return 5500;
  }
    ////// FIN REGION DU LITTORAL
    ////// DEBUT REGION DU NORD
  /*tous les departements de la region du NORD sauf à GAROUA
   *autrement dit le client vie dans la region NORD
   *est né dans le departement de GAROUA
   *mais vit dans un autre departement
   **/
  else if (
    residence?.match(/^poly|tcholiré|guidère$/i) &&
    tribunal?.match(/^bénoué$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du NORD sauf à poli
     *autrement dit le client vie dans la region NORD
     *est né dans le departement de poli
     *mais vit dans un autre departement
     **/
    residence?.match(/^garoua|tcholiré|guidère$/i) &&
    tribunal?.match(/^faro$/i)
  ) {
    return 7500;
  }

  else if (
    /*tous les departements de la region du NORD sauf à tholire
     *autrement dit le client vie dans la region NORD
     *est né dans le departement de tholiré
     *mais vit dans un autre departement
     **/
    residence?.match(/^garoua|poly|guidère$/i) &&
    tribunal?.match(/^mayo rey$/i)
  ) {
    return 7500;
  }

  else if (
    /*tous les departements de la region du NORD sauf à guider
     *autrement dit le client vie dans la region NORD
     *est né dans le departement de guider
     *mais vit dans un autre departement
     **/
    residence?.match(/^garoua|poly|tcholiré$/i) &&
    tribunal?.match(/^mayo louti$/i)
  ) {
    return 7500;
  }
  // même region même departement REGION : NORD
  else if (residence?.match(/^garoua$/i) && tribunal?.match(/^bénoué$/i)) {
    return 5500;
  } else if (residence?.match(/^poly$/i) && tribunal?.match(/^faro$/i)) {
    return 5500;
  } else if (residence?.match(/^tcholiré$/i) && tribunal?.match(/^mayo rey$/i)) {
    return 5500;
  } else if (
    residence?.match(/^guidère$/i) &&
    tribunal?.match(/^mayo louti$/i)
  ) {
    return 5500;
  }
    //////// FIN REGION DU NORD
    /////////// DEBUT REGION DU NORD OUEST
  /*tous les departements de la region du NORD sauf BAMENDA
   *autrement dit le client vie dans la region NORD OUEST
   *est né dans le departement de BAMENDA
   *mais vit dans un autre departement
   **/
  else if (
    residence?.match(/^koumbo|foundong|mbengui|ndop|nkambé|wum$/i) &&
    tribunal?.match(/^mezam$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du NORD sauf koumbo
     *autrement dit le client vie dans la region NORD OUEST
     *est né dans le departement de kumbo
     *mais vit dans un autre departement
     **/
    residence?.match(/^bamenda|foundong|mbengui|ndop|nkambé|wum$/i) &&
    tribunal?.match(/^bui$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du NORD sauf fundong
     *autrement dit le client vie dans la region NORD OUEST
     *est né dans le departement de fundong
     *mais vit dans un autre departement
     **/
    residence?.match(/^bamenda|koumbo|mbengui|ndop|nkambé|wum$/i) &&
    tribunal?.match(/^boyo$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du NORD sauf MBENGUI
     *autrement dit le client vie dans la region NORD OUEST
     *est né dans le departement de MBENGUI
     *mais vit dans un autre departement
     **/
    residence?.match(/^bamenda|koumbo|foundong|ndop|nkambé|wum$/i) &&
    tribunal?.match(/^momo$/i)
  ) {
    return 7500;
  }
  else if (
    /*tous les departements de la region du NORD sauf ndop
     *autrement dit le client vie dans la region NORD OUEST
     *est né dans le departement de ndop
     *mais vit dans un autre departement
     **/
    residence?.match(/^bamenda|koumbo|foundong|mbengui|nkambé|wum$/i) &&
    tribunal?.match(/^ngo ketoundjia$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du NORD ouest  sauf nkambe
     *autrement dit le client vie dans la region NORD OUEST
     *est né dans le departement de nkambe
     *mais vit dans un autre departement
     **/
    residence?.match(/^bamenda|koumbo|foundong|mbengui|ndop|wum$/i) &&
    tribunal?.match(/^ndonga mantung$/i)
  ) {
    return 7500;
  }
  else if (
    /*tous les departements de la region du NORD sauf wum
     *autrement dit le client vie dans la region NORD OUEST
     *est né dans le departement de wum
     *mais vit dans un autre departement
     **/
    residence?.match(/^bamenda|koumbo|foundong|mbengui|nkambé|ndop$/i) &&
    tribunal?.match(/^menchum$/i)
  ) {
    return 7500;
  }
  // même region même departement
  else if (residence?.match(/^bamenda$/i) && tribunal?.match(/^mezam$/i)) {
    return 5000;
  } else if (residence?.match(/^koumbo$/i) && tribunal?.match(/^bui$/i)) {
    return 5000;
  } else if (residence?.match(/^foundong$/i) && tribunal?.match(/^boyo$/i)) {
    return 5000;
  } else if (residence?.match(/^mbengui$/i) && tribunal?.match(/^momo$/i)) {
    return 5000;
  } else if (
    residence?.match(/^nkambé$/i) &&
    tribunal?.match(/^ndonga mantung$/i)
  ) {
    return 5000;
  } else if (
    residence?.match(/^ndop$/i) &&
    tribunal?.match(/^ngo ketoundjia$/i)
  ) {
    return 5000;
  } else if (residence?.match(/^wum$/i) && tribunal?.match(/^menchum$/i)) {
    return 5000;
  }

    /////// FIN REGION DU NORD OUEST
    /////////// DEBUT REGION DE L'OUEST
  /*tous les departements de la region du ouest sauf bafoussam
   *autrement dit le client vie dans la region  OUEST
   *est né dans le departement de fundong
   *mais vit dans un autre departement
   **/
  else if (
    residence?.match(
      /^bandjoun|bafang|baham|foumban|dschang|mbouda|banganté$/i
    ) &&
    tribunal?.match(/^mifi$/i)
  ) {
    return 6500;
  } else if (
    /*tous les departements de la region du ouest sauf bandjoun
     *autrement dit le client vie dans la region  OUEST
     *est né dans le departement de bandjoun
     *mais vit dans un autre departement
     **/
    residence?.match(
      /^bafoussam|bafang|baham|foumban|dschang|mbouda|banganté$/i
    ) &&
    tribunal?.match(/^koung khi$/i)
  ) {
    return 6500;
  }

  else if (
    /*tous les departements de la region du ouest sauf bafang
     *autrement dit le client vie dans la region  OUEST
     *est né dans le departement de bafang
     *mais vit dans un autre departement
     **/
    residence?.match(
      /^bafoussam|bandjoun|baham|foumban|dschang|mbouda|banganté$/i
    ) &&
    tribunal?.match(/^haut nkam$/i)
  ) {
    return 6500;
  }

  else if (
    /*tous les departements de la region du ouest sauf baham
     *autrement dit le client vie dans la region  OUEST
     *est né dans le departement de baham
     *mais vit dans un autre departement
     **/
    residence?.match(
      /^bafoussam|bandjoun|bafang|foumban|dschang|mbouda|banganté$/i
    ) &&
    tribunal?.match(/^haut plateau$/i)
  ) {
    return 6000;
  }

  else if (
    /*tous les departements de la region du ouest sauf foumban
     *autrement dit le client vie dans la region  OUEST
     *est né dans le departement de foumban
     *mais vit dans un autre departement
     **/
    residence?.match(
      /^baham|bafoussam|bandjoun|bafang|dschang|mbouda|banganté$/i
    ) &&
    tribunal?.match(/^noun$/i)
  ) {
    return 6500;
  } else if (
    /*tous les departements de la region du ouest sauf dschang
     *autrement dit le client vie dans la region  OUEST
     *est né dans le departement de dschang
     *mais vit dans un autre departement
     **/
    residence?.match(
      /^bafoussam|bandjoun|bafang|baham|foumban|mbouda|banganté$/i
    ) &&
    tribunal?.match(/^ménoua$/i)
  ) {
    return 6500;
  } else if (
    /*tous les departements de la region du ouest sauf mbouda
     *autrement dit le client vie dans la region  OUEST
     *est né dans le departement de mbouda
     *mais vit dans un autre departement
     **/
    residence?.match(
      /^bafoussam|bandjoun|bafang|baham|foumban|dschang|banganté$/i
    ) &&
    tribunal?.match(/^bamboutos$/i)
  ) {
    return 6500;
  } else if (
    /*tous les departements de la region du ouest sauf bangante
     *autrement dit le client vie dans la region  OUEST
     *est né dans le departement de bangante
     *mais vit dans un autre departement
     **/
    residence?.match(
      /^bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda$/i
    ) &&
    tribunal?.match(/^ndé$/i)
  ) {
    return 6500;
  }

  // même region même département
  else if (residence?.match(/^bafoussam$/i) && tribunal?.match(/^mifi$/i)) {
    return 5000;
  } else if (residence?.match(/^bandjoun$/i) && tribunal?.match(/^koung khi$/i)) {
    return 5000;
  } else if (residence?.match(/^bafang$/i) && tribunal?.match(/^haut nkam/i)) {
    return 4500;
  } else if (residence?.match(/^baham$/i) && tribunal?.match(/^haut plateau$/i)) {
    return 5000;
  } else if (residence?.match(/^foumban$/i) && tribunal?.match(/^noun$/i)) {
    return 5000;
  } else if (residence?.match(/^dschang$/i) && tribunal?.match(/^ménoua$/i)) {
    return 5000;
  } else if (residence?.match(/^banganté$/i) && tribunal?.match(/^ndé$/i)) {
    return 5000;
  }
    /////// FIN REGION DE L'OUEST
    //////// DEBUT REGION DU SUD

    /*kribi vers la valée du ntem
     */
  //kribi ebolowa
  else if (residence?.match(/^ngoulmakong$/i) && tribunal?.match(/^mvila$/i)) {
    return 5500;
  } else if (residence?.match(/^ngoulmakong$/i) && tribunal?.match(/^océan$/i)) {
    return 8500;
  } else if (
    residence?.match(/^ngoulmakong$/i) &&
    tribunal?.match(/^valée du ntem$/i)
  ) {
    return 7000;
  } else if (residence?.match(/^kribi$/i) && tribunal?.match(/^mvila$/i)) {
    return 8000;
  }
  //ebolowa kribi
  else if (residence?.match(/^ebolowa$/i) && tribunal?.match(/^océan$/i)) {
    return 8000;
  }
  //kribi ->ambam
  else if (residence?.match(/^kribi$/i) && tribunal?.match(/^valée du ntem$/i)) {
    return 8500;
  }
  //ambam vers kribi
  else if (residence?.match(/^ambam$/i) && tribunal?.match(/^océan$/i)) {
    return 8500;
  } else if (residence?.match(/^kribi$/i) && tribunal?.match(/^mvila$/i)) {
    /*tous les departements de la region du SUD sauf ebolowa
     *autrement dit le client vie dans la region SUD
     *est né dans le departement de ebolowa
     *mais vit dans un autre departement
     **/
    return 8000;
  }
  //amabam vers ebolowa
  else if (residence?.match(/^ambam$/i) && tribunal?.match(/^mvila$/i)) {
    return 6500;
  }
  //ebolowa vers ambam   val(é|e)e[ ]du[ ]n?tem|a(m|n)?ba(m|n)
  else if (
    residence?.match(/^ébolowa$/i) &&
    tribunal?.match(/^valée du ntem$/i)
  ) {
    return 6500;
  }

    /*tous les departements de la region du SUD sauf kribi
     *autrement dit le client vie dans la region SUD
     *est né dans le departement de kribi
     *mais vit dans un autre departement
     **/

    /*tous les departements de la region du SUD sauf sangmelima
     *autrement dit le client vie dans la region SUD
     *est né dans le departement de kribi
     *mais vit dans un autre departement
     **/

  // ebolowa vers sangmelima
  else if (residence?.match(/^ébolowa$/i) && tribunal?.match(/^dja et lobo$/i)) {
    return 6500;
  }
  //sangmelima vers ebolowa
  else if (residence?.match(/^sangmelima$/i) && tribunal?.match(/^mvila$/i)) {
    return 6500;
  }

  //ambam vers sangmelima
  else if (residence?.match(/^ambam$/i) && tribunal?.match(/^dja et lobo$/i)) {
    return 7500;
  }
  //Sangmelima vers ambam
  else if (
    residence?.match(/^sangmelima$/i) &&
    tribunal?.match(/^valée du ntem$/i)
  ) {
    return 7500;
  }
  //kribi vers sangmelima
  else if (residence?.match(/^kribi$/i) && tribunal?.match(/^dja et lobo$/i)) {
    return 8500;
  }
  //sangmelima vers kribi
  else if (residence?.match(/^sangmelima$/i) && tribunal?.match(/^océan$/i)) {
    return 8500;
  }

  // même region même departement
  else if (
    residence?.match(/^sangmelima$/i) &&
    tribunal?.match(/^dja et lobo$/i)
  ) {
    return 5000;
  } else if (
    residence?.match(/^ambam$/i) &&
    tribunal?.match(/^valée du ntem$/i)
  ) {
    return 5000;
  } else if (residence?.match(/^ébolowa$/i) && tribunal?.match(/^mvila$/i)) {
    return 5000;
  } else if (residence?.match(/^kribi$/i) && tribunal?.match(/^océan$/i)) {
    return 5000;
  }
    ///////// FIN REGION DU SUD
    /////////////DEBUT REGION DU SUD OUEST
  /*tous les departements de la region du SUD OUEST sauf bangem
   *autrement dit le client vie dans la region SUD
   *est né dans le departement DE bangem
   *mais vit dans un autre departement*/
  else if (
    residence?.match(/^limbé|koumba|manfé|menji|mundemba$/i) &&
    tribunal?.match(/^coupé manengouba$/i)
  ) {
    return 7000;
  } else if (
    /*tous les departements de la region du SUD OUEST sauf limbe
     *autrement dit le client vie dans la region SUD
     *est né dans le departement DE limbe
     *mais vit dans un autre departement
     **/
    residence?.match(/^bangem|koumba|manfé|menji|mumdemba$/i) &&
    tribunal?.match(/^fako$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du SUD OUEST sauf koumba
     *autrement dit le client vie dans la region SUD
     *est né dans le departement DE koumba
     *mais vit dans un autre departement
     **/
    residence?.match(/^bangem|limbé|manfé|menji|mumdemba$/i) &&
    tribunal?.match(/^mémé$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du SUD OUEST sauf manfe
     *autrement dit le client vie dans la region SUD
     *est né dans le departement DE manfe
     *mais vit dans un autre departement
     **/
    residence?.match(/^bangem|limbé|koumba|menji|mumdemba$/i) &&
    tribunal?.match(/^manyu$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du SUD OUEST sauf menji
     *autrement dit le client vie dans la region SUD
     *est né dans le departement DE menji
     *mais vit dans un autre departement
     **/
    residence?.match(/^bangem|limbé|koumba|manfé|mundemba$/i) &&
    tribunal?.match(/^lebialem$/i)
  ) {
    return 7500;
  } else if (
    /*tous les departements de la region du SUD OUEST sauf mundemba
     *autrement dit le client vie dans la region SUD
     *est né dans le departement DE mundemba
     *mais vit dans un autre departement
     **/
    residence?.match(/^bangem|limbé|koumba|manfé|menji$/i) &&
    tribunal?.match(/^ndian$/i)
  ) {
    return 7500;
  }
  // même region même departement
  else if (
    residence?.match(/^bangem$/i) &&
    tribunal?.match(/^coupé manengouba$/i)
  ) {
    return 5000;
  } else if (residence?.match(/^limbé$/i) && tribunal?.match(/^fako$/i)) {
    return 5000;
  } else if (residence?.match(/^koumba$/i) && tribunal?.match(/^mémé$/i)) {
    return 5000;
  } else if (residence?.match(/^manfé$/i) && tribunal?.match(/^manyu$/i)) {
    return 5000;
  } else if (residence?.match(/^menji$/i) && tribunal?.match(/^lebialem$/i)) {
    return 5000;
  } else if (residence?.match(/^mundemba$/i) && tribunal?.match(/^ndian$/i)) {
    return 5000;
  }
    /////////// FIN DES REQUETES AU SEIN D'UNE MEME REGION
    ////////// DEBUT DES REQUETES ENTRE REGION

  //toutes les regions du Cameroun sauf la region de l'adamaoua
  else if (
    residence?.match(
      /^mfou|soa|mengang|endom|ayos|obala|akonolinga|ntui|ngoumou|mbalmayo|nanga éboko|bafia|éséka|monatélé|bamenda|koumbo|foundong|mbengwi|ndop|nkambé|wum|bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté|ambam|ébolowa|kribi|sangmelima|bangem|limbé|koumba|manfé|menji|mundemba$/i
    ) &&
    tribunal?.match(
      /^mayo banyo|mbéré|vina|ngaoundéré|djérem|tibati|faro et déo$/i
    )
  ) {
    return 10000;
  } else if (
    residence?.match(
      /^abong mbang|bertoua|batouri|yokadouma|kaélé|kousseri|maroua|mokolo|mora|yagoua|édéa|douala|nkongsamba|yabassi|garoua|poly|tcholiré|guidère$/i
    ) &&
    tribunal?.match(
      /^mayo banyo|mbéré|vina|ngaoundéré|djérem|tibati|faro et déo$/i
    )
  ) {
    return 9000;
  } else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(
      /^mayo banyo|mbéré|vina|ngaoundéré|djérem|tibati|faro et déo$/i
    )
  ) {
    return 9500;
  }
    //toutes les regions vers le deparement du centre yaoundé(mfoundi)

  //douala nkongsamba yabassi yabassi bandjoun bafang baham foumban dschang mbouda bagnate vers yaoundé (est-ce que je n'ai pas un code yde douala?)
  else if (
    residence?.match(
      /^douala|nkongsamba|yabassi|bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté$/i
    ) &&
    tribunal?.match(/^mfoundi$/i)
  ) {
    return 7500;
  }

    //
  // de yaoundé vers les regions du littoral, et l'ouest sauf edea(sanaga maritime)
  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(
      /^mifi|koung khi|haut nkam|haut plateau|noun|menoua|ndé|wouri|nkam|moungo$/i
    )
  ) {
    return 7500;
  }

  // ambam-> vers yaoundé
  else if (residence?.match(/^ambam$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 8500;
  }

  //  yaoundé->ambam
  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/^valée du ntem$/i)
  ) {
    return 8500;
  }
  // sangmelima,ebolowa,edea-> vers yaoundé
  else if (
    residence?.match(/^sangmelima|ébolowa|édéa$/i) &&
    tribunal?.match(/^mfoundi$/i)
  ) {
    return 7500;
  }
  // yaoundé ->sangmelima,ebolowa,edea
  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/^dja et lobo|mvila|sanaga maritime$/i)
  ) {
    return 7500;
  }
  // des autres regions vers les departements de la region du centre sauf yaoundé(mfoundi)
  else if (residence?.match(/^édéa|nkongsamba|yabassi|ambam|ébolowa|kribi|sangmelima|bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté#/i) &&
    tribunal?.match(/^mefou et afamba|nyong et mfoumou|mbam et kim|mefou et akono|nyong et so'o|haute sanaga|nyong et ékélé|lékié$/i)
  ) {
    return 9000;
  }

  else if (
    residence?.match(
      /^bamenda|koumbo|foundong|mbengwi|ndop|nkambé|wum|bangem|limbé|koumba|manfé|menji|mundemba$/i
    ) &&
    tribunal?.match(
      /^mefou et afamba|nyong et mfoumou|mbam et kim|mefou et akono|nyong et so'o|haute sanaga|nyong et ékélé|lékié$/i
    )
  ) {
    return 9500;
  } else if (
    residence?.match(
      /^bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté#/i
    ) &&
    tribunal?.match(/^mbam et inoubou$/i)
  ) {
    return 7000;
  } else if (
    residence?.match(
      /^meiganga|ngaoundéré|tibati|tignère|abong mbang|bertoua|batouri|yokadouma|kaélé|kousseri|maroua|mokolo|mora|yagoua|garoua|poly|tcholiré|guidère$/i
    ) &&
    tribunal?.match(
      /^mefou et afamba|nyong et mfoumou|mbam et kim|mefou et akono|nyong et so'o|haute sanaga|mbam et inoubou|nyong et ékélé|lékié$/i
    )
  ) {
    return 10000;
  }
  //douala ver la mefou et afamba bref les autres documents de la region du cenntre
  else if (
    residence?.match(/^douala$/i) &&
    tribunal?.match(
      /^mefou et afamba|nyong et mfoumou|mbam et kim|mefou et akono|nyong et so'o|haute sanaga|mbam et inoubou|bafia|nyong et ékélé|lékié$/i
    )
  ) {
    return 9000;
  }
  //les autre départements vers le WOURI
  else if (
    residence?.match(
      /^mfou|akonolinga|ntui|ngoumou|mbalmayo|bafia|nanga éboko|éséka|monatélé/i
    ) &&
    tribunal?.match(/^wouri$/i)
  ) {
    return 9000;
  }

  // des autres départements sauf le mfoundi(yaoundé) vers les département de la region de l'est
  else if (
    residence?.match(
      /^mfou|soa|endom|obala|akonolinga|ntui|bafia|ngoumou|mbalmayo|nanga éboko|éséka|monatélé|meiganga|ngaoundéré|tibati|tignère|kaélé|kousseri|maroua|mokolo|mora|yagoua|édéa|douala|nkongsamba|yabassi|garoua|poly|tcholiré|guidère|bamenda|koumbo|foundong|mbengwi|ndop|nkambé|wum|bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté|ambam|ébolowa|kribi|sangmelima|bangem|limbé|koumba|manfé|menji|mundemba$/i
    ) &&
    tribunal?.match(/^mboumba et ngoko|haut nyong|kadey$/i)
  ) {
    return 10000;
  }

  else if (
    residence?.match(
      /^akonolinga|ayos|mengang|ngoumou|mbalmayo|éséka|monatélé|meiganga|ngaoundéré|tibati|tignère|kaélé|kousseri|maroua|mokolo|mora|yagoua|garoua|poly|tcholiré|guidère|bamenda|koumbo|foundong|mbengwi|ndop|nkambé|wum|bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté|ambam|ébolowa|kribi|sangmelima|bangem|limbé|koumba|manfé|menji|mundemba$/i
    ) &&
    tribunal?.match(/^lom et djérem$/i)
  ) {
    return 9000;
  }

  else if (
    residence?.match(
      /^mfou|soa|endom|obala|ntui|ngoumou|nanga éboko|bafia|nkongsamba|yabassi|douala|édéa$/i
    ) &&
    tribunal?.match(/^lom et djérem$/i)
  ) {
    return 10000;
  }


  // yaoundé vers l'est
  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/^lom et djérem|kadey|haut nyong$/i)
  ) {
    return 9500;
  } else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/^kadey|haut nyong$/i)
  ) {
    return 10000;
  }
  // les départements de la region de l'est vers le mfoundi (yaoundé) prix 7500
  else if (
    residence?.match(/^batouri|abong mbang$/i) &&
    tribunal?.match(/^mfoundi$/i)
  ) {
    return 10000;
  }


  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/^lom et djérem$/i)
  ) {
    return 9500;
  }
  else if (residence?.match(/^bertoua$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 8500;
  }
  else if (residence?.match(/^yokadouma$/i) && tribunal?.match(/^mfoundi$/i)) {
    return 10000;
  }
  else if (
    residence?.match(/^yaoundé$/i) &&
    tribunal?.match(/^mboumba et ngoko$/i)
  ) {
    return 10000;
  }
  //certains arrondissements de l'est vers la ville de yaoundé
  else if (
    residence?.match(/^lomié|bélabo|moloundou|ngato$/i) &&
    tribunal?.match(/^mfoundi$/i)
  ) {
    return 10500;
  }

    // akonolinga, endom, obala, ntui, ngoumou, monatélé nanga etboko éséka

  //des départements des autres regions vers les départements de la region de l'extreme nord
  else if (
    residence?.match(
      /^yaoundé|meiganga|ngaoundéré|tibati|tignère|abong mbang|bertoua|batouri|yokadouma|édéa|douala|nkongsamba|yabassi|garoua|poly|tcholiré|guidère|bamenda|koumbo|foundong|mbengwi|ndop|nkambé|wum|ambam|ébolowa|kribi|sangmelima|bangem|limbé|koumba|manfé|menji|mudemba$/i
    ) &&
    residence?.match(
      /^mayo kani|logone et chari|diamaré|mayo tsanaga|mayo danay|poly$/i
    )
  ) {
    return 9500;
  }
    // akonolinga, endom, obala, ntui, ngoumou, monatélé nanga etboko éséka

  //des départements des autres regions vers les départements de la region de l'extreme nord
  else if (
    residence?.match(
      /^bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté|mfou|soa|mengang|endom|ayos|obala|akonolinga|ntui|ngoumou|mbalmayo|nanga éboko|bafia|éséka|monatélé$/i
    ) &&
    tribunal?.match(
      /^mayo kani|logone et chari|diamaré|mayo tsanaga|mayo danay|poly$/i
    )
  ) {
    return 10000;
  }
  // tout sauf la region du nord
  else if (
    residence?.match(
      /^yaoundé|meiganga|ngaoundéré|tibati|tignère|abong mbang|bertoua|batouri|yokadouma|édéa|douala|nkongsamba|yabassi|kaélé|kousseri|maroua|mokolo|mora|yagoua$/i
    ) &&
    tribunal?.match(/^bénoué|faro|mayo rey|tcholiré|mayo louti$/i)
  ) {
    return 9500;
  } else if (
    residence?.match(
      /^mfou|soa|mengang|endom|ayos|obala|akonolinga|ntui|ngoumou|mbalmayo|nanga éboko|bafia|éséka|monatélé|bamenda|koumbo|foundong|mbengwi|ndop|nkambé|wum|bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté|ambam|ébolowa|kribi|sangmelima|bangem|limbé|koumba|manfé|menji|mudemba$/i
    ) &&
    tribunal?.match(/^bénoué|faro|mayo rey|tcholiré|mayo louti$/i)
  ) {
    return 10000;
  }

  // vers la->region du littoral                       // ON DOIT RETIRER LA REGION DE L'OUEST QUI SE TROUVE PROCHE DE LA REGION DU LITTORAL
  else if (
    residence?.match(
      /^mfou|mengang|mbalmayo|okola|nanga éboko|bafia|éséka|monatélé|bamenda|koumbo|foundong|mbengwi|ndop|nkambé|ambam|ébolowa|kribi|sangmelima|bangem|limbé|koumba|manfé|menji|mundemba$/i
    ) &&
    tribunal?.match(/^wouri|sanaga maritime|nkam|moungo|mbanga$/i)
  ) {
    return 9000;
  } else if (
    residence?.match(/^soa|ayos|obala|akonolinga|ntui|ngoumou$/i) &&
    tribunal?.match(/^wouri|sanaga maritime|nkam|moungo|mbanga$/i)
  ) {
    return 10000;
  } else if (
    residence?.match(/^endom$/i) &&
    tribunal?.match(/^wouri|sanaga maritime|nkam|moungo|mbanga$/i)
  ) {
    return 10000;
  } else if (
    residence?.match(
      /^meiganga|ngaoundéré|tibati|tignère|abong mbang|bertoua|batouri|yokadouma|garoua|poly|tnoliré|guidère|kaélé|kousseri|maroua|mokolo|mora|yagoua$/i
    ) &&
    tribunal?.match(/^wouri|sanaga maritime|nkam|moungo|mbanga$/i)
  ) {
    return 10000;
  }
    // region ouest
  //J'AI RETIRER LE LITTORAL ET YAOUNDe
  else if (
    residence?.match(
      /^mfou|soa|mengang|ayos|akonolinga|ntui|ngoumou|mbalmayo|nanga éboko|éséka|monatélé|ébolowa|kribi|sangmlima$/i
    ) &&
    tribunal?.match(
      /^mifi|koung khi|haut nkam|haut plateau|noun|menoua|dschang|ndé$/i
    )
  ) {
    return 9000;
  } else if (
    residence?.match(/^endom$/i) &&
    tribunal?.match(
      /^mifi|koung khi|haut nkam|haut plateau|noun|menoua|dschang|ndé$/i
    )
  ) {
    return 10000;
  } else if (
    residence?.match(/^bafia|ombessa|obala$/i) &&
    tribunal?.match(
      /^mifi|koung khi|haut nkam|haut plateau|noun|menoua|dschang|ndé$/i
    )
  ) {
    return 7000;
  } else if (
    residence?.match(
      /^meiganga|ngaoundéré|tibati|tignère|abong mbang|bertoua|batouri|yokadouma|kaélé|kousseri|maroua|mokolo|mora|yagoua|garoua|poly|tcholiré|guidère|ambam$/i
    ) &&
    tribunal?.match(
      /^mifi|koung khi|haut nkam|haut plateau|noun|menoua|dschang|ndé$/i
    )
  ) {
    return 9500;
  }
  // ouest vers ->le littoral
  else if (
    residence?.match(
      /^bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté$/i
    ) &&
    tribunal?.match(/^wouri|sanaga maritime|nkam|moungo$/i)
  ) {
    return 8500;
  }
  // LE LITTORAL VERS L'OUEST
  else if (
    residence?.match(/^douala|édéa|yabassi|nkongsamba$/i) &&
    tribunal?.match(/^mifi|koung khi|haut nkam|haut plateau|noun|menoua|ndé$/i)
  ) {
    return 8500;
  }

  // des autreS regions vers la region du sud sauf akonolinga
  else if (
    residence?.match(
      /^mfou|soa|mengang|endom|ayos|obala|ntui|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté|ngoumou|mbalmayo|nanga éboko|bafia|éséka|bafoussam|monatélé$/i
    ) &&
    tribunal?.match(/^mvila|dja et lobo|valée du ntem|océan$/i)
  ) {
    return 9000;
  } else if (
    residence?.match(/^endom$/i) &&
    tribunal?.match(/^mvila|dja et lobo$/i)
  ) {
    return 9000;
  } else if (
    residence?.match(/^endom$/i) &&
    tribunal?.match(/^valée du ntem|océan$/i)
  ) {
    return 10000;
  } else if (
    residence?.match(
      /^meiganga|ngaoundéré|tibati|tignère|abong mbang|bertoua|batouri|yokadouma|kaélé|kousséri|maroua|mololo|mora|yagoua|bamenda|koumbo|foundong|mbengwi|ndop|nkambé|wum|garoua|poly|toliré|guidère|bangem|limbé|koumba|manfé|menji|mundemba$/i
    ) &&
    tribunal?.match(/^mvila|dja et lobo|valée du ntem|océan$/i)
  ) {
    return 10000;
  }
  //le sud vers le nyong et mfoumou
  else if (
    residence?.match(/^ébolowa|kribi|sangmelima$/i) &&
    tribunal?.match(/^nyong et mfoumou$/i)
  ) {
    return 9500;
  } else if (
    residence?.match(/^ambam$/i) &&
    tribunal?.match(/^nyong et mfoumou$/i)
  ) {
    return 9500;
  }

  //akonolinga vers le sud
  else if (
    residence?.match(/^akonolinga$/i) &&
    tribunal?.match(/^mvilla|dja et lobo|océan$/i)
  ) {
    return 8500;
  } else if (
    residence?.match(/^akonolinga$/i) &&
    tribunal?.match(/^valée du ntem$/i)
  ) {
    return 9000;
  }

  //VERS LA REGION DU SUD OUEST SAUF LES REGIONS DE l'ouest et du nord ouest
  else if (
    residence?.match(
      /^mfou|akonolinga|ntui|ngoumou|mbalmayo|yaoundé|nanga éboko|bafia|éséka|monatélé|meiganga|ngaoundéré|tibati|tignère|édéa|douala|nkongsamba|yabassi|abong mbang|bertoua|batouri|yokadouma|kaélé|kousseri|maroua|mokolo|mora|yagoua|garoua|poly|tcholiré|guidère|ambam|ébolowa|kribi|sangmelima$/i
    ) &&
    tribunal?.match(/^fako|coupé manengouba|lebialem|manyu|mémé|ndian$/i)
  ) {
    return 9500;
  }
  // toutes les regions (sauf le sud ouest et l'ouest ) vers la regions du nord ouest
  else if (
    residence?.match(
      /^mfou|akonolinga|ntui|ngoumou|mbalmayo|youndé|nanga éboko|bafia|éséka|monatélé|meiganga|ngaoundéré|tibati|tignère|édéa|douala|nkongsamba|yabassi|abong mbang|bertoua|batouri|yokadouma|kaélé|kousseri|maroua|mokolo|mora|yagoua|garoua|poly|tcholiré|guidère|ambam|ébolowa|kribi|sangmelima$/i
    ) &&
    tribunal?.match(
      /^boyo|bui|donga mantung|menchum|wum|mezam|momo|ngo kétunjia$/i
    )
  ) {
    return 9500;
  }
  // departements du sud ouest et l'ouest vers les departements du nord ouest
  else if (
    residence?.match(
      /^bangem|limbé|koumba|manfé|menji|mundemba|bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté$/i
    ) &&
    tribunal?.match(/^boyo|bui|donga mantung|menchum|mezam|momo|ngo kétunjia$/i)
  ) {
    return 8500;
  }
  // departement dE l' ouest  et du nord ouest vers les departements du sud ouest
  else if (
    residence?.match(
      /^bafoussam|bandjoun|bafang|baham|foumban|dschang|mbouda|banganté|bamenda|koumbo|foundong|mbengwi|ndop|nkambé|wum/i
    ) &&
    tribunal?.match(/^fako|coupé manengouba|lebialem|manyu|mémé|ndian$/i)
  ) {
    return 8500;
  }
  // département du sud ouest, du nord ouest vers les departements de la region de l'ouest
  else if (
      residence?.match(
        /^bangem|limbé|koumba|manfé|menji|mundemba|bamenda|koumbo|foundong|mbengwi|ndop|nkambé|wum$/i
      ) &&
      tribunal?.match(/^mifi|koung khi|haut nkam|haut plateau|noun|menoua|ndé$/i)
    ) {
      return 8500;
    }
};
export default computePrice;
