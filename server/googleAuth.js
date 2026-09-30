import { OAuth2Client } from 'google-auth-library';

const googleClientId = process.env.GOOGLE_CLIENT_ID || process.env.VITE_GOOGLE_CLIENT_ID || '';
const client = new OAuth2Client(googleClientId);

/**
 * Verifies a Google ID Token (credential) either via google-auth-library or Google tokeninfo API.
 * 
 * @param {string} token - Google JWT ID Token / Credential Token
 * @returns {Promise<{ email: string, name: string, picture: string, sub: string, emailVerified: boolean }>}
 */
export async function verifyGoogleToken(token) {
  if (!token) {
    throw new Error('Google authentication token is missing or empty.');
  }

  try {
    if (googleClientId) {
      // Verify with google-auth-library using configured Google Client ID
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: googleClientId
      });
      const payload = ticket.getPayload();
      
      if (!payload) {
        throw new Error('Failed to retrieve token payload from Google.');
      }

      return {
        email: payload.email,
        name: payload.name || payload.given_name || 'Verified User',
        picture: payload.picture || '/images/client-1.jpg',
        sub: payload.sub,
        emailVerified: payload.email_verified || false
      };
    } else {
      // Direct verification via Google OAuth2 tokeninfo endpoint
      const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(token)}`);
      
      if (!response.ok) {
        const errorDetails = await response.json().catch(() => ({}));
        throw new Error(errorDetails.error_description || errorDetails.error || 'Invalid or expired Google Token');
      }

      const payload = await response.json();

      return {
        email: payload.email,
        name: payload.name || 'Verified User',
        picture: payload.picture || '/images/client-1.jpg',
        sub: payload.sub,
        emailVerified: payload.email_verified === 'true' || payload.email_verified === true
      };
    }
  } catch (err) {
    console.error('❌ [GOOGLE TOKEN VERIFICATION ERROR]:', err.message);
    throw new Error(`Google Authentication failed: ${err.message}`);
  }
}
