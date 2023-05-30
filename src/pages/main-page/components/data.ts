

const choiceDatas  = [
    {
        id: 1,
        designation: 'Copie certifié conforme de la CNI',
        price: '2500 FCFA',
        type: 'CERTIFIED_COPY',
        selected:false
    },
    {
        id:2,
        designation: 'Copie certifié conforme du baccalaureat',
        price: '2100 FCFA',
        type: 'COPY_CERTIFIED',
        selected:false
    },
    {
        id: 3,
        designation: 'Copie certifié conforme du DUT',
        price: '2100 FCFA',
        type: 'COPY_CERTIFIED',
        selected:false
    },
    {
        id: 4,
        designation: 'Copie certifié conforme du BTS',
        price: '2100 FCFA',
        type: 'COPY_CERTIFIED',
        selected:false
    },
    {
        id: 5,
        designation: 'Copie certifié conforme de la Licence',
        price: '2100 FCFA',
        type: 'COPY_CERTIFIED',
        selected:false
    },
    {
        id: 6,
        designation: 'Copie certifié conforme de l\'acte de naissance',
        price: '2500 FCFA',
        type: 'COPY_CERTIFIED',
        selected:false
    },
    {
        id: 7,
        designation: 'Attestation de l\'original du baccalaureat',
        price: '3000 FCFA',
        type: 'ATTESTATION',
        selected:false
    },
    {
        id: 8,
        designation: 'Attestation de l\'original du DUT',
        price: '3000 FCFA',
        type: 'ATTESTATION',
        selected:false
    },
    {
        id: 9,
        designation: 'Attestation de la licence',
        price: '3000 FCFA',
        type: 'ATTESTATION',
        selected:false
    },
    {
        id: 10,
        designation: 'Certificat de nationalité',
        price: '3500 FCFA',
        type: 'ATTESTATION',
        selected:false
    },
    {
        id: 11,
        designation: 'Attestation de l\'original du BTS',
        price: '3000 FCFA',
        type: 'ATTESTATION',
        selected:false
    },
    {
        id: 12,
        designation: 'Certificat de toise',
        price: '2000 FCFA',
        type: 'CERTIFICATE',
        selected:false
    },
    {
        id: 13,
        designation: 'Fiche de concours à télécharger et à timbrée',
        price: '2500 FCFA',
        type: 'OTHERS',
        selected:false
    },
    {
        id: 14,
        designation: 'Photo 4 x 4',
        price: '1000 FCFA',
        type: 'OTHERS',
        selected:false
    },
    {
        id: 15,
        designation: 'Fiche de renseignement',
        price: '100 FCFA',
        type: 'OTHERS',
        selected:false
    }
]
const stepData = [
    {
        stepName: "Mes informations",
        isCompleted: false,
        isLastItem: false,
    },
    {
        stepName: "Mes choix",
        isCompleted: false,
        isLastItem: false,
    }, {
        stepName: "Mes documents",
        isCompleted: false,
        isLastItem: false,
    },
    {
        stepName: "Paiement",
        isCompleted: false,
        isLastItem: true,
    }
]

export { choiceDatas, stepData }