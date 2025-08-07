function FindProxyForURL(url, host) {
  if (isInNet(host, "192.168.234.0", "255.255.255.0") ||
    return "SOCKS 127.0.0.1:18890";  return "DIRECT";
}
