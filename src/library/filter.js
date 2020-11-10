export default function filterChatsAndFriends(search, data) {
  return data.filter((friend) => {
    return friend.name.includes(search) ? friend : null;
  });
}
