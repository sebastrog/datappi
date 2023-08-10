import championsData from './championsData.js';

export default function handler(req, res) {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const pageChampions = championsData.slice(startIndex, endIndex);

  res.json(pageChampions);
}