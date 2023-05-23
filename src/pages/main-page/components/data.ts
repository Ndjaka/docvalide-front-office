import { ChoiceTypes } from '../../../types/choiceTypes';

const choiceDatas : ChoiceTypes[] = [
    {
        id: 1,
        label: 'Copie certifié conforme de la CNI',
        price: '2500 FCFA',
        type: 'CERTIFIED_COPY',
        selected:false
    },
    {
        id:2,
        label: 'Copie certifié conforme du baccalaureat',
        price: '2100 FCFA',
        type: 'COPY_CERTIFIED',
        selected:false
    },
    {
        id: 3,
        label: 'Copie certifié conforme du DUT',
        price: '2100 FCFA',
        type: 'COPY_CERTIFIED',
        selected:false
    },
    {
        id: 4,
        label: 'Copie certifié conforme du BTS',
        price: '2100 FCFA',
        type: 'COPY_CERTIFIED',
        selected:false
    },
    {
        id: 5,
        label: 'Copie certifié conforme de la Licence',
        price: '2100 FCFA',
        type: 'COPY_CERTIFIED',
        selected:false
    },
    {
        id: 6,
        label: 'Copie certifié conforme de l\'acte de naissance',
        price: '2500 FCFA',
        type: 'COPY_CERTIFIED',
        selected:false
    },
    {
        id: 7,
        label: 'Attestation de l\'original du baccalaureat',
        price: '3000 FCFA',
        type: 'ATTESTATION',
        selected:false
    },
    {
        id: 8,
        label: 'Attestation de l\'original du DUT',
        price: '3000 FCFA',
        type: 'ATTESTATION',
        selected:false
    },
    {
        id: 9,
        label: 'Attestation de la licence',
        price: '3000 FCFA',
        type: 'ATTESTATION',
        selected:false
    },
    {
        id: 10,
        label: 'Certificat de nationalité',
        price: '3500 FCFA',
        type: 'ATTESTATION',
        selected:false
    },
    {
        id: 11,
        label: 'Attestation de l\'original du BTS',
        price: '3000 FCFA',
        type: 'ATTESTATION',
        selected:false
    },
    {
        id: 12,
        label: 'Certificat de toise',
        price: '2000 FCFA',
        type: 'CERTIFICATE',
        selected:false
    },
    {
        id: 13,
        label: 'Fiche de concours à télécharger et à timbrée',
        price: '2500 FCFA',
        type: 'OTHERS',
        selected:false
    },
    {
        id: 14,
        label: 'Photo 4 x 4',
        price: '1000 FCFA',
        type: 'OTHERS',
        selected:false
    },
    {
        id: 15,
        label: 'Fiche de renseignement',
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