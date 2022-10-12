import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { ThemeProvider } from '../../utils/Context'
 
import Freelances from '.'

const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
]

const server = setupServer(
    // On précise ici l'url qu'il faudra "intercepter"
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
        return res(ctx.json({ freelancersList: freelancersMockedData }))
    })
)
 
// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())

it('should  render without crash', async () => {
    render(
        <ThemeProvider>
            <Freelances />
        </ThemeProvider>
    )
        
    //Vérifie si le loader s'affiche bien
    const loader = screen.getByTestId('loader');
    expect(loader).toBeTruthy();

    // //Vérifie le mock
    // await waitFor(() => {
    //     expect(screen.getByText('Harry Potter')).toBeTruthy();
    //     // expect(screen.getByText('Hermione Granger')).toBeTruthy();
    // })

})
