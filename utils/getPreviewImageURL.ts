import axios from "axios";
import lqip from "lqip-modern";

const getPreviewImageUrl = async (url: string): Promise<string> => {
  const { data } = await axios.get(url, { responseType: "arraybuffer" });
  const previewImage = await lqip(data);

  return previewImage.metadata.dataURIBase64;
};

export default getPreviewImageUrl;
