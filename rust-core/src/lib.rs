use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct Peer {
    pub id: String,
    pub name: String,
    pub online: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct TransferPlan {
    pub file_size_bytes: u64,
    pub chunk_size_bytes: u64,
    pub estimated_chunks: u64,
}

pub fn choose_chunk_size(file_size_bytes: u64) -> u64 {
    match file_size_bytes {
        0..=16_777_216 => 256 * 1024,
        16_777_217..=268_435_456 => 512 * 1024,
        _ => 1024 * 1024,
    }
}

pub fn plan_transfer(file_size_bytes: u64) -> TransferPlan {
    let chunk = choose_chunk_size(file_size_bytes);
    let estimated_chunks = if file_size_bytes == 0 {
        0
    } else {
        (file_size_bytes + chunk - 1) / chunk
    };

    TransferPlan {
        file_size_bytes,
        chunk_size_bytes: chunk,
        estimated_chunks,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn chooses_small_chunk_for_small_file() {
        assert_eq!(choose_chunk_size(5_000_000), 256 * 1024);
    }

    #[test]
    fn chooses_mid_chunk_for_mid_file() {
        assert_eq!(choose_chunk_size(20_000_000), 512 * 1024);
    }

    #[test]
    fn chooses_large_chunk_for_large_file() {
        assert_eq!(choose_chunk_size(1_000_000_000), 1024 * 1024);
    }

    #[test]
    fn plans_chunks() {
        let p = plan_transfer(1_048_576);
        assert_eq!(p.chunk_size_bytes, 256 * 1024);
        assert_eq!(p.estimated_chunks, 4);
    }
}
