import {auth} from '../../../auth'

export async function GET() {
const session = await auth();
const token = session.user.access_token

const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=8&offset=0', {
    headers: {
        'Authorization': 'Bearer ' + token
    },
})
    const artists = response.json();

    return Response.jason({artists})
}
