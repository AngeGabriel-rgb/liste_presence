import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllApprenant = async (req, res) => {
    try {
        const apprenant = await prisma.apprenant.findMany()
        res.json(apprenant)
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: "Erreur serveur"})
    }
}

export const getApprenantById = async (req, res) => {
    try {
        const {id} = req.params
        const apprenant = await prisma.apprenant.findUnique({
            where: { id: parseInt(id)}
        })

        if (!apprenant) {
            return res.status(400).json({ message: "Aucun participant trouvé "})
        }

        res.json(apprenant)
    } catch (error) {
        console.log(error)
        res.status(200).json({ message: "Erreur serveur" })
    }
}

export const createApprenant = async (req, res) => {
    try {
        const { nom, prenom, email, quartier } = req.body

        // Verification de champs
        if(!nom || !prenom || !email || !quartier) {
            return res.status(400).json({ message: "Tous les champ sont obligatoires" })
        }

        // Verifier si cet apprenant existe deja
        const existingApprenant = await prisma.apprenant.findUnique({
            where: { email }
        })
        if(existingApprenant) {
            return res.status(400).json({ message: "Cet apprenant existe déjà " })
        }

        // Créer un nouveau apprenant
        const apprenant = await prisma.apprenant.create({
            data: {
                nom,
                prenom,
                email,
                quartier
            }
        })
        res.status(200).json({ message: "Apprenant créer avec succès"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erreur Serveur " })
    }
}

export const updateApprenant = async (req, res) => {
    try {
        const { id } = req.params
        const { nom, prenom, email, quartier } = req.body

        const apprenant = await prisma.apprenant.update({
            where: { id: parseInt(id) },
            data : { nom, prenom, email, quartier }
        })
        res.status(200).json({ message: "Apprenant modifier avec succès"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erreur Serveur "})
    }
}


export const deleteApprenant = async (req, res) => {
    try {
        const { id } = req.params

        const apprenant = await prisma.apprenant.findUnique({
            where: {id: parseInt(id)}
        })

        if(!apprenant){
            return res.status(400).json({message: "Apprenant non trouvé "})
        }

        await prisma.apprenant.delete({ where: { id: parseInt(id) } })

        res.json({ message: "Apprenant supprimé avec succès " })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erreur serveur" })
    }
}