export const getStreamUrlFromShareUrl = (shareUrl) => {
  const id = shareUrl.split("/")[5]; // 1dhoeo9ZkIGwcyXk5MMc2KF61dTWGkXFE
  const url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${
    import.meta.env.VITE_GOOGLE_API_KEY
  }`;
  return url;
};
