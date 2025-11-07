function FindProxyForURL(url, host) {
  // Check for internal hostnames first

  if (shExpMatch(host, "*.hpc.swc.ucl.ac.uk") ||
      shExpMatch(host, "*.id.swc.ucl.ac.uk")) {
    return "SOCKS 127.0.0.1:18890";
  }

  if (shExpMatch(host, "*.admon.swc.ucl.ac.uk")) {
    return "SOCKS 127.0.0.1:18880";
  }

  if (isInNet(host, "192.168.237.0", "255.255.255.0")) { 
    return "SOCKS 127.0.0.1:18870";
  }  

  if (isInNet(host, "192.168.240.0", "255.255.255.0") ||
      isInNet(host, "192.168.238.0", "255.255.255.0") ||
      isInNet(host, "192.168.236.0", "255.255.255.0") ||
      isInNet(host, "192.168.234.0", "255.255.255.0")) {
    
    return "SOCKS 127.0.0.1:18890";  return "DIRECT";
  }

  if (isInNet(host, "192.168.220.0", "255.255.255.0")) {
    return "SOCKS 127.0.0.1:18880";  return "DIRECT";
  }  


}
