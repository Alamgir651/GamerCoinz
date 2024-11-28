import User from "../models/user.model.js";


const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({
      name: user.name,
      email: user.email,
      coins: user.coins,
      gameAccounts: user.gameAccounts,
      challengeStats: user.challengeStats,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile data.' });
  }
};

const linkGameAccount = async (req, res) => {
  const { game, accountId } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.gameAccounts[game] = accountId;
    await user.save();
    res.json({ success: true, gameAccounts: user.gameAccounts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to link game account.' });
  }
};

export {getProfile, linkGameAccount};