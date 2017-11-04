const helper = module.exports = {
  extractHeadlines: (html) => {
    return (html.match(/<h(\d).*?>(.*?)<\/h\d>/g) || []).map((header) => {
      const match = header.match(/<h(\d)(.*?)>(.*?)<\/h\d>/)
      return { level: match[1], ref: helper.extractId(match[2]), text: match[3] };
    });
  },

  extractId: (ref) => {
    const match = ref.match(/id="(.*)"/);
    return match ? `#${match[1]}` : null;
  }
};
